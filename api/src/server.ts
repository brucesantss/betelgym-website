import express from 'express';
import { PrismaClient } from '../generated/prisma';

const app = express();
const port = 8080;

const prisma = new PrismaClient();

// compatibilidade
app.use(express.json());

app.post('/login', (req,res) => {
    const { nome } = req.body;
})

app.listen(port, () => {
    console.log('server online');
})

