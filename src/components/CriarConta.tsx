import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Calendar } from "../components/ui/calendar";
import { useState } from "react";

export const CriarConta = () => {
  const [vencimento, setVencimento] = useState<Date | undefined>();

  return (
    <main className="flex w-screen h-screen items-center justify-between relative p-6">

      {/* Logo */}
      <h1 className="absolute top-10 left-10 text-2xl font-bold">BetelGym.</h1>

      {/* Esquerda - Apresentação */}
      <section className="flex flex-col gap-4 max-w-md">
        <div>
          <h2 className="text-6xl font-semibold leading-tight">
            Crie sua conta <br /> e treine hoje!
          </h2>
          <p className="text-md font-semibold mt-2">Organize seus treinos com a BetelGym.</p>
        </div>

        <div className="flex gap-4 mt-4">
          <a href="/home">
            <Button className="w-40 hover:bg-black hover:text-white hover:font-semibold transition">
              Fazer login
            </Button>
          </a>

          <a href="/home">
            <Button
              className="w-40 hover:bg-black hover:text-white hover:font-semibold transition"
              variant="secondary"
            >
              Voltar
            </Button>
          </a>
        </div>
      </section>

      {/* Direita - Formulário de Criar Conta */}
      <section className="flex flex-1 justify-center items-center">
        <form className="flex flex-col gap-4 w-full max-w-sm">
          <h2 className="text-4xl font-semibold mb-2">Criar conta</h2>

          <div className="flex flex-col gap-3">

            {/* Nome */}
            <div>
              <Label htmlFor="nome" className="font-semibold">Nome</Label>
              <Input id="nome" placeholder="Seu nome completo" />
            </div>

            {/* E-mail */}
            <div>
              <Label htmlFor="email" className="font-semibold">E-mail</Label>
              <Input id="email" placeholder="seuemail@gmail.com" />
            </div>

            {/* Senha */}
            <div>
              <Label htmlFor="senha" className="font-semibold">Senha</Label>
              <Input id="senha" type="password" placeholder="Sua senha segura" />
            </div>

            {/* Plano */}
            <div>
              <Label htmlFor="plano" className="font-semibold">Plano</Label>
              <Select>
                <SelectTrigger id="plano">
                  <SelectValue placeholder="Selecione o plano" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EXPERIMENTAL">Experimental</SelectItem>
                  <SelectItem value="MENSAL">Mensal</SelectItem>
                  <SelectItem value="BIMESTRAL">Bimestral</SelectItem>
                  <SelectItem value="TRISMESTRAL">Trimestral</SelectItem>
                  <SelectItem value="ANUAL">Anual</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Modalidade */}
            <div>
              <Label htmlFor="modalidade" className="font-semibold">Modalidade</Label>
              <Select>
                <SelectTrigger id="modalidade">
                  <SelectValue placeholder="Selecione a modalidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MUSCULACAO">Musculação</SelectItem>
                  <SelectItem value="NATACAO">Natação</SelectItem>
                  <SelectItem value="FUNCIONAL">Funcional</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Vencimento */}
            <div>
              <Label htmlFor="vencimento" className="font-semibold">Aniversário</Label>
              <Input
                id="vencimento"
                type="date"
                value={vencimento?.toISOString().split('T')[0] ?? ''}
                onChange={(e) => setVencimento(new Date(e.target.value))}
              />
            </div>

            <Button type="submit" className="bg-black text-white mt-2">
              Criar conta
            </Button>

          </div>
        </form>
      </section>

    </main>
  );
};
