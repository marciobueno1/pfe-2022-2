import { useState } from "react";
import "./App.css";
import { ThemedButton } from "./components/ThemeButton";
import { Toolbar } from "./components/Toolbar";
import { ThemeContext, themes } from "./contexts/ThemeContext";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(themes.dark);
  const handleThemeButtonClick = () => {
    setSelectedTheme(
      selectedTheme === themes.dark ? themes.light : themes.dark
    );
  };
  return (
    <div className="App">
      <ThemeContext.Provider
        value={{ theme: selectedTheme, setTheme: handleThemeButtonClick }}
      >
        <Toolbar />
        <hr />
        <ThemedButton />
      </ThemeContext.Provider>
      <hr />
      <ThemedButton />
    </div>
  );
}

export default App;
