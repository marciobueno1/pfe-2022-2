import "./App.css";
import { Contador } from "./components/Contador";
import { Titulo } from "./components/Titulo";

function App() {
  let idade = 23;
  return (
    <div className="App">
      <Titulo txt="Nome: Maria" />
      <Titulo txt={`Idade = ${idade}`} />
      <Contador txt="Bananas:" />
      <hr />
      <Contador txt="Laranjas:" />
      <hr />
      <Contador txt="Tomates:" />
      <hr />
    </div>
  );
}

export default App;
