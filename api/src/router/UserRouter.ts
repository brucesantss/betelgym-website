import { Router } from "express";
import { cadastro, login } from "../controller/UserController";

const router = Router();

router
    .post('/login', login)
    .post('/cadastro', cadastro)

export default router;