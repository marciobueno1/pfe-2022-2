import { useState } from "react";
import "./App.css";
import { Clock } from "./components/Clock";

function App() {
  console.log("App foi renderizado!");
  const [visivel, setVisivel] = useState(true);
  const [texto, setTexto] = useState("");
  return (
    <div className="App">
      <p>
        <input value={texto} onChange={(evt) => setTexto(evt.target.value)} />
        <button onClick={() => setVisivel(!visivel)}>Exibir / Ocultar</button>
      </p>
      {visivel && <Clock texto={texto} />}
    </div>
  );
}

export default App;
