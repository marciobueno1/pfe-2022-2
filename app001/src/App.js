import React, { useState } from "react";
import "./App.css";
import { Contador } from "./components/Contador";
import { Titulo } from "./components/Titulo";

function App() {
  const [exibir, setExibir] = useState(true);
  const handleExibirClick = () => {
    setExibir(!exibir);
  };
  let idade = 233;
  return (
    <div>
      <div className="App">
        <Titulo txt="Nome: Maria" />
        <Titulo txt={`Idade = ${idade}`} />
        <Contador txt={`Contador1 (${exibir})`} />
        <hr />
        <Contador txt={`Contador2 (${exibir})`} />
        <hr />
      </div>
      <div>
        <button onClick={handleExibirClick}>Exibir / Ocultar</button>
      </div>
    </div>
  );
}

export default App;
