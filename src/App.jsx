import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Animal from "./Animal";
import Sobre from "./Sobre";
import AnimalDetalhe from "./AnimalDetalhe";
import { useState } from "react";
import './App.css'

const animais = [
  { id: 1, nome: "Pipoca", tipo: "Gato", imagem: "https://t3.ftcdn.net/jpg/03/31/29/80/360_F_331298095_qXh9FThBqu5Up1O8MJZwqaOx0qoGVa4C.jpg" },
  { id: 2, nome: "Lilith", tipo: "Gata", imagem: "https://cdn.pixabay.com/photo/2015/12/27/23/43/gata-1110701_960_720.jpg" },
  { id: 3, nome: "Fofura", tipo: "Cachorra", imagem: "https://i.pinimg.com/originals/e2/89/75/e289753aa0cbf7d161521ee81581b3c8.jpg" },
  { id: 4, nome: "Wood", tipo: "Cachorro", imagem: "https://petcaramelo.com/wp-content/uploads/2018/07/vira-lata.jpg" },
];

function PaginaPrincipal() {
  const [pesquisa, setPesquisa] = useState("");

  const animaisFiltrados = animais.filter((animal) =>
    animal.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
    animal.tipo.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div>
      <h1>Adopt Me</h1>
      <input
        type="text"
        placeholder="Pesquisar por nome ou tipo..."
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />
      <div className="animais-lista">
        {animaisFiltrados.map((animal) => (
          <Link key={animal.id} to={`/animal/${animal.id}`} className="animal-card">
            <Animal nome={animal.nome} tipo={animal.tipo} imagem={animal.imagem} />
          </Link>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Início</Link> | <Link to="/sobre">Sobre</Link>
      </nav>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/animal/:id" element={<AnimalDetalhe />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;