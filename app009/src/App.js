import "./App.css";
import { BearCounter } from "./components/BearCounter";
import { Controls } from "./components/Controls";
import { TestMode } from "./components/TestMode";

function App() {
  return (
    <div className="App">
      <BearCounter />
      <Controls />
      <br />
      <br />
      <TestMode />
    </div>
  );
}

export default App;
