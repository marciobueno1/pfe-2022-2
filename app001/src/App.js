import { useState } from "react";
import "./App.css";
import { Contador } from "./components/Contador";

function App() {
  const [item, setItem] = useState("");
  const [contadores, setContadores] = useState([]);
  const handleClickBtInserir = () => {
    const contadoresFiltrados = contadores.filter(
      (contador) => contador.props.txt === item
    );
    if (contadoresFiltrados.length === 0) {
      setContadores([...contadores, <Contador key={item} txt={item} />]);
    }
  };
  return (
    <div className="App">
      <input
        placeholder="Item da lista de compras"
        value={item}
        onChange={(evt) => setItem(evt.target.value)}
      />
      <button onClick={handleClickBtInserir}>Inserir</button>
      <hr />
      <div>{contadores}</div>
      <hr />
    </div>
  );
}

export default App;
