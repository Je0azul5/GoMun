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
  const { title, note, date } = req.body;
  const created = await prisma.entry.create({
    data: { userId: 'demo', title, note, date: date ? new Date(date) : null },
  });
  res.status(201).json(created);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`🚀 GoMun API running on port ${port}`));