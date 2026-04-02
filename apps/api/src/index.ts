import 'dotenv/config';
import path from 'path';
import express from 'express';
import cors from 'cors';
import { Prisma, PrismaClient } from '@prisma/client';

type UnlockCondition =
  | { type: 'dreamCompleted'; value: string }
  | { type: 'dreamCount'; value: number };

type UnlockContext = {
  completedDreamId?: string;
  completedDreamCount: number;
};

const app = express();
const prisma = new PrismaClient();

const staticRoot = path.join(__dirname, '..', 'public');
const isDev = process.env.NODE_ENV === 'development';

app.use(cors());
app.use(express.json());

if (!isDev) {
  app.use(express.static(staticRoot));
}

app.get('/health', (_req, res) => res.status(200).send('ok'));

function parseUnlockCondition(raw: unknown): UnlockCondition | null {
  if (!raw || typeof raw !== 'object') {
    return null;
  }

  const type = (raw as { type?: unknown }).type;
  const value = (raw as { value?: unknown }).value;

  if (type === 'dreamCompleted' && typeof value === 'string' && value.trim()) {
    return { type, value: value.trim() };
  }

  if (type === 'dreamCount' && typeof value === 'number' && Number.isFinite(value) && value > 0) {
    return { type, value: Math.floor(value) };
  }

  return null;
}

function shouldUnlockCoupon(condition: UnlockCondition | null, context: UnlockContext) {
  if (!condition) {
    return true;
  }

  if (condition.type === 'dreamCompleted') {
    return condition.value === context.completedDreamId;
  }

  return context.completedDreamCount >= condition.value;
}

async function getUnlockContext(
  db: Prisma.TransactionClient | PrismaClient,
  completedDreamId?: string
): Promise<UnlockContext> {
  const completedDreamCount = await db.entry.count({ where: { done: true } });
  return { completedDreamId, completedDreamCount };
}

async function unlockEligibleCoupons(
  db: Prisma.TransactionClient | PrismaClient,
  context: UnlockContext
) {
  const lockedCoupons = await db.coupon.findMany({
    where: { unlocked: false },
    orderBy: { createdAt: 'desc' },
  });

  const toUnlock = lockedCoupons.filter((coupon) =>
    shouldUnlockCoupon(parseUnlockCondition(coupon.unlockCondition), context)
  );

  if (toUnlock.length === 0) {
    return [];
  }

  const unlockedCoupons = await Promise.all(
    toUnlock.map((coupon) =>
      db.coupon.update({
        where: { id: coupon.id },
        data: { unlocked: true },
      })
    )
  );

  return unlockedCoupons;
}

app.get('/api/entries', async (_req, res) => {
  const data = await prisma.entry.findMany({ orderBy: { createdAt: 'desc' } });
  res.json(data);
});

app.post('/api/entries', async (req, res) => {
  const { title, note, date, userId } = req.body ?? {};

  if (typeof title !== 'string' || !title.trim()) {
    res.status(400).json({ error: 'Title is required.' });
    return;
  }

  const defaultUserId = process.env.DEFAULT_USER_ID ?? 'couple';
  const resolvedUserId =
    typeof userId === 'string' && userId.trim().length > 0 ? userId.trim() : defaultUserId;

  const created = await prisma.entry.create({
    data: {
      userId: resolvedUserId,
      title: title.trim(),
      note: typeof note === 'string' && note.trim() ? note.trim() : null,
      date: date ? new Date(date) : null,
    },
  });
  res.status(201).json(created);
});

app.put('/api/entries/:id', async (req, res) => {
  const { id } = req.params;
  const { title, note } = req.body ?? {};

  if (!id) {
    res.status(400).json({ error: 'Entry id is required.' });
    return;
  }

  if (typeof title !== 'string' || !title.trim()) {
    res.status(400).json({ error: 'Title is required.' });
    return;
  }

  try {
    const updated = await prisma.entry.update({
      where: { id },
      data: {
        title: title.trim(),
        note: typeof note === 'string' && note.trim() ? note.trim() : null,
      },
    });

    res.json(updated);
  } catch (error) {
    if ((error as { code?: string }).code === 'P2025') {
      res.status(404).json({ error: 'Entry not found.' });
      return;
    }

    res.status(500).json({ error: 'Unable to update entry.' });
  }
});

app.patch('/api/entries/:id/done', async (req, res) => {
  const { id } = req.params;
  const { done } = req.body ?? {};

  if (typeof done !== 'boolean') {
    res.status(400).json({ error: 'done must be a boolean.' });
    return;
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      const updatedEntry = await tx.entry.update({
        where: { id },
        data: { done },
      });

      const unlockedCoupons =
        done === true ? await unlockEligibleCoupons(tx, await getUnlockContext(tx, updatedEntry.id)) : [];

      return { entry: updatedEntry, unlockedCoupons };
    });

    res.json(result);
  } catch (error) {
    if ((error as { code?: string }).code === 'P2025') {
      res.status(404).json({ error: 'Entry not found.' });
      return;
    }

    res.status(500).json({ error: 'Unable to update entry.' });
  }
});

app.delete('/api/entries/:id', async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ error: 'Entry id is required.' });
    return;
  }

  try {
    await prisma.entry.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    if ((error as { code?: string }).code === 'P2025') {
      res.status(404).json({ error: 'Entry not found.' });
      return;
    }

    res.status(500).json({ error: 'Unable to delete entry.' });
  }
});

app.get('/api/coupons', async (_req, res) => {
  const data = await prisma.coupon.findMany({ orderBy: { createdAt: 'desc' } });
  res.json(data);
});

app.post('/api/coupons', async (req, res) => {
  const { title, description, unlockCondition } = req.body ?? {};

  if (typeof title !== 'string' || !title.trim()) {
    res.status(400).json({ error: 'Title is required.' });
    return;
  }

  const parsedCondition = parseUnlockCondition(unlockCondition);
  const context = await getUnlockContext(prisma);
  const unlocked = shouldUnlockCoupon(parsedCondition, context);

  try {
    const created = await prisma.coupon.create({
      data: {
        title: title.trim(),
        description:
          typeof description === 'string' && description.trim() ? description.trim() : null,
        unlockCondition: parsedCondition ? (parsedCondition as Prisma.InputJsonValue) : Prisma.JsonNull,
        unlocked,
      },
    });

    res.status(201).json(created);
  } catch {
    res.status(500).json({ error: 'Unable to create coupon.' });
  }
});

app.patch('/api/coupons/:id/redeem', async (req, res) => {
  const { id } = req.params;
  const { redeemed } = req.body ?? {};

  if (typeof redeemed !== 'boolean') {
    res.status(400).json({ error: 'redeemed must be a boolean.' });
    return;
  }

  try {
    const current = await prisma.coupon.findUnique({ where: { id } });

    if (!current) {
      res.status(404).json({ error: 'Coupon not found.' });
      return;
    }

    if (!current.unlocked && redeemed) {
      res.status(400).json({ error: 'Coupon must be unlocked before redemption.' });
      return;
    }

    const updated = await prisma.coupon.update({
      where: { id },
      data: {
        redeemed,
        redeemedAt: redeemed ? new Date() : null,
      },
    });

    res.json(updated);
  } catch {
    res.status(500).json({ error: 'Unable to update coupon.' });
  }
});

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api') || req.path === '/health' || isDev) return next();
  res.sendFile(path.join(staticRoot, 'index.html'));
});

const port = Number(process.env.PORT) || 8080;
app.listen(port, '0.0.0.0', () => console.log(`🚀 GoMun API running on port ${port}`));
