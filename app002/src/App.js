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
  const [texto, setTexto] = useState("");
  const handleChangeInputTexto = (evt) => {
    setTexto(evt.target.value);
  };

  return (
    <div className="App">
      <input type="text" value={texto} onChange={handleChangeInputTexto} />
      <h3>Vogais: {getVowels(texto)}</h3>
      <h3>Consoantes: {getConsonants(texto)}</h3>
    </div>
  );
}

export default App;
