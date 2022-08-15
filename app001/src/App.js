import "./App.css";
import { Titulo } from "./components/Titulo";

function App() {
  let idade = 233;
  return (
    <div>
      <div className="App">
        <Titulo txt="Nome: Maria" />
        <Titulo txt={`Idade = ${idade}`} />
      </div>
      <div>DIV 2</div>
    </div>
  );
}

export default App;
