import express from 'express';
import cors from 'cors';

import { PrismaClient } from '../generated/prisma';

const app = express();
const port = 8080;

const prisma = new PrismaClient();

// compatibilidade
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }))

app.post('/login', async (req,res) => {
    const { email, senha } = req.body;

    if(!email || !senha){
        res.status(400).json({ message: 'todos os campos são obrigatórios!' })
    }

    const aluno = await prisma.aluno.findUnique({ where: {email} });
    if(!aluno){
        res.status(400).json({ message: 'você ainda não tem cadastro. fazer login?' })
    }

    res.status(200).json({ message: `${aluno?.nome} entrou na conta.` })
})

app.post('/cadastro', async (req,res) => {
    const { nome, email, senha, plano, modalidade, aniversario  } = req.body;

    if(!nome || !email || !senha || !plano || !modalidade || !aniversario){
        res.status(400).json({ message: 'todos os campos são obrigatórios!' })
    }

    const aluno = await prisma.aluno.create({ data: {
        nome,
        email,
        senha,
        plano,
        modalidade,
        aniversario: new Date(aniversario),
        contaCriada: new Date(),
        vencimento: new Date()
    } });
    if(!aluno){
        res.status(400).json({ message: 'suco de pica' })
    }

    res.status(200).json({ message: `${aluno?.nome} entrou na conta.` })
})

app.listen(port, () => {
    console.log('server online');
})

