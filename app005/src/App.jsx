import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const taxaConversao = 5;
  const [valorDolar, setValorDolar] = useState(1);
  const [valorReal, setValorReal] = useState(taxaConversao);

  useEffect(() => {
    setValorReal(valorDolar * taxaConversao);
  }, [valorDolar]);

  useEffect(() => {
    setValorDolar(valorReal / taxaConversao);
  }, [valorReal]);

  return (
    <div className="App">
      <h1>Conversão</h1>
      <p>
        Dolar:{" "}
        <input
          type="number"
          value={valorDolar}
          onChange={(evt) => setValorDolar(evt.target.value)}
        />
      </p>
      <p>
        Real:{" "}
        <input
          type="number"
          value={valorReal}
          onChange={(evt) => setValorReal(evt.target.value)}
        />
      </p>
    </div>
  );
}

export default App;
