import { PrismaClient } from "../../generated/prisma";
import { Response, Request } from "express";

import session from 'express-session';

import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
    const { email, senha } = req.body;

    if(!email || !senha){
        res.status(400).json({ message: 'todos os campos são obrigatórios!' });
        return;
    }

    const aluno = await prisma.aluno.findUnique({ where: {email} });
    if(!aluno){
        res.status(400).json({ message: 'você ainda não tem cadastro. criar conta?' });
        return;
    }

    res.status(200).json({ message: `${aluno?.nome}, entrou na conta.` });
}

export const cadastro = async (req: Request, res: Response) => {
    const { nome, email, senha, plano, modalidade, aniversario  } = req.body;

    if(!nome || !email || !senha || !plano || !modalidade || !aniversario){
        res.status(400).json({ message: 'todos os campos são obrigatórios!' });
        return;
    }

    const emailExistente = await prisma.aluno.findUnique({ where: { email } });
    if(emailExistente){
        res.status(401).json({ message: 'email em uso. fazer login?' });
        return;
    }

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(senha, salt);

    const aluno = await prisma.aluno.create({ data: {
        nome,
        email,
        senha: passwordHash,
        plano,
        modalidade,
        aniversario: new Date(aniversario),
        contaCriada: new Date(),
        vencimento: new Date()
    } });
    if(!aluno){
        res.status(400).json({ message: 'não foi possível criar uma conta!' });
        return;
    }

    res.status(200).json({ message: `${aluno?.nome}, conta criada.` });
};