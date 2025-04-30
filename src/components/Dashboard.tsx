import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const Dashboard = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-between relative px-10">

      {/* Logo */}
      <h1 className="absolute top-10 left-10 text-2xl font-bold">BetelGym.</h1>

      {/* Lado esquerdo */}
      <section className="w-1/2 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold">Seus dados</h2>

        <ul>
            <li><strong>Nome:</strong> Ryan Jesus</li>
            <li><strong>Idade:</strong> 19</li>
            <li><strong>Peso:</strong> 72Kg</li>
            <li><strong>Altura:</strong> 1.70cm</li>
        </ul>
      </section>

      {/* Lado direito */}
      <section className="w-1/2 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-6">Seu plano atual</h2>

        <Card className="w-[400px] border-l-4 border-green-500">
          <CardHeader>
            <CardTitle>Musculação</CardTitle>
            <CardDescription>
              Plano: <span className="text-lg font-semibold">Mensal</span>
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            <p className="font-semibold text-lg">Vencimento: 20/06/2025</p>
            <div className="flex gap-2">
              <Button className="bg-black text-white">Conferir Status</Button>
              <Button variant="outline">Alterar vencimento</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
