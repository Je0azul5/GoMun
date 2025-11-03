import 'dotenv/config';
import path from 'path';
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

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

// --- Rutas ---
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

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api') || req.path === '/health' || isDev) return next();
  res.sendFile(path.join(staticRoot, 'index.html'));
});

const port = Number(process.env.PORT) || 8080;
app.listen(port, '0.0.0.0', () => console.log(`🚀 GoMun API running on port ${port}`));
