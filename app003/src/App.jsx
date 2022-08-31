import React, { useState } from "react";
import "./App.css";

function App() {
  const [textos, setTextos] = useState([]);
  const [texto, setTexto] = useState("");
  const handleChangeTexto = (evt) => {
    setTexto(evt.target.value);
  };
  const handleClickBtInserir = () => {
    let textoTrim = texto.trim();
    if (textoTrim) {
      setTextos([...textos, textoTrim]);
    }
  };
  return (
    <div className="App">
      <p>
        <label htmlFor="texto">Digite um texto: </label>
        <input
          id="texto"
          type="text"
          value={texto}
          onChange={handleChangeTexto}
        />{" "}
        <button onClick={handleClickBtInserir}>Inserir</button>
      </p>
      <ol>
        {textos.length > 0 &&
          textos.map((umTexto, index) => <li key={index}>{umTexto}</li>)}
      </ol>
    </div>
  );
}

export default App;
