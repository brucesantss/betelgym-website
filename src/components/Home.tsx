import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { FormEvent, useState } from "react";
import axios from 'axios';

export const Home = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [message, setMessage] = useState<MessageProps>({
        message: '',
        statusCode: undefined,
        error: ''
    });

    type MessageProps = {
        message?: string,
        statusCode?: number | undefined,
        error?: string
    }

    const handleLogin = async (e: FormEvent) => {

        e.preventDefault();

        try {

            const data = await axios.post('http://localhost:8080/login', {email, senha});
            setMessage({ message: data.data.message, statusCode: data.status, error: ''})

            console.log(message);
                                    

        } catch (err: any) {
            setMessage({ error: err.response.data.message })
        }

    }

    return (
        <main className="flex w-screen h-screen items-center justify-between relative p-6">

            {/* Logo */}
            <h1 className="absolute top-10 left-10 text-2xl font-bold">BetelGym.</h1>

            {/* Esquerda - Apresentação */}
            <section className="flex flex-col gap-4 max-w-md">
                <div>
                    <h2 className="text-6xl font-semibold leading-tight">
                        Seus planos + <br /> organizados.
                    </h2>
                    <p className="text-md font-semibold mt-2">Gerencie. Altere. Adicione.</p>
                </div>

                <div className="flex gap-4 mt-4">

                    <a href="/criarconta">
                        <Button className="w-40 hover:bg-black hover:text-white hover:font-semibold transition">
                            Criar conta
                        </Button>
                    </a>

                    
                    <Button
                        className="w-40 hover:bg-black hover:text-white hover:font-semibold transition"
                        variant="secondary"
                    >
                        Fazer orçamento
                    </Button>
                </div>
            </section>

            {/* Direita - Formulário de Login */}
            <section className="flex flex-1 justify-center items-center">
                <form className="flex flex-col gap-4 w-full max-w-sm">
                    <h2 className="text-4xl font-semibold mb-2">Faça login</h2>

                    <div className="flex flex-col gap-3">
                        <div>
                            <Label htmlFor="email" className="font-semibold">E-mail</Label>
                            <Input id="email" placeholder="betelgym@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div>
                            <Label htmlFor="senha" className="font-semibold">Senha</Label>
                            <Input id="senha" placeholder="bananacomaveia" type="password" onChange={(e) => setSenha(e.target.value)}/>
                        </div>

                        <Button className="bg-black text-white mt-2" onClick={handleLogin}>
                            Continuar
                        </Button>

                        <span className="mt-4 text-sm font-semibold text-zinc-500 text-center">{message.message ? message.message : message.error}</span>
                    </div>
                </form>
            </section>

        </main>
    );
};
