import React, { useState } from "react";
import { ContadorRegex } from "./components/ContadorRegex";
import "./App.css";

function App() {
  const regexVogais = /[aáàãâeéêiíoóõôuú]/gi;
  const regexConsoantes = /[bcçdfghjklmnpqrstvwxyz]/gi;
  const [texto, setTexto] = useState("");
  const handleChangeInputTexto = (evt) => {
    setTexto(evt.target.value);
  };

  return (
    <div className="App">
      <input type="text" value={texto} onChange={handleChangeInputTexto} />
      <ContadorRegex titulo="Vogais" texto={texto} regex={regexVogais} />
      <ContadorRegex
        titulo="Consoantes"
        texto={texto}
        regex={regexConsoantes}
      />
    </div>
  );
}

export default App;
