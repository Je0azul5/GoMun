import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());

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

const port = Number(process.env.PORT) || 8080;
app.listen(port, () => console.log(`🚀 GoMun API running on port ${port}`));
