import { CriarConta } from "./components/CriarConta";
import { Dashboard } from "./components/Dashboard";
import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <main className="w-screen h-screen justify-center items-center flex p-6">

      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/criarconta" element={<CriarConta />} />
        </Routes>
      </BrowserRouter>

    </main>

  );
};

export default App;
