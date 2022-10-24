import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const ThemedButton = ({}) => {
  const themeContext = useContext(ThemeContext);
  return (
    <button
      style={{
        background: themeContext.theme.background,
        color: themeContext.theme.foreground,
      }}
      onClick={themeContext.setTheme}
    >
      I am styled by theme context!
    </button>
  );
};
