import React, { useState } from "react";
import "./App.css";

function getVowels(str) {
  var m = str.match(/[aáàãâeéêiíoóõôuú]/gi);
  return m === null ? 0 : m.length;
}

function getConsonants(str) {
  var m = str.match(/[bcçdfghjklmnpqrstvwxyz]/gi);
  return m === null ? 0 : m.length;
}

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
      {textos.length > 0 && (
        <table>
          <tr>
            <th>Texto</th>
            <th>Vogais</th>
            <th>Consoantes</th>
          </tr>
          {textos.map((umTexto, index) => (
            <tr key={index}>
              <td>{umTexto}</td>
              <td>{getVowels(umTexto)}</td>
              <td>{getConsonants(umTexto)}</td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}

export default App;
