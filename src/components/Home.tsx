import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

export const Home = () => {
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
                            <Input id="email" placeholder="betelgym@gmail.com" />
                        </div>

                        <div>
                            <Label htmlFor="senha" className="font-semibold">Senha</Label>
                            <Input id="senha" placeholder="bananacomaveia" type="password" />
                        </div>

                        <Button type="submit" className="bg-black text-white mt-2">
                            Continuar
                        </Button>
                    </div>
                </form>
            </section>

        </main>
    );
};
