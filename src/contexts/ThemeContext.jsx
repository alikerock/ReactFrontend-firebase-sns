import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createAppTheme } from "../theme";

const STORAGE_KEY = "devlog-theme-mode";
const ThemeModeContext = createContext(null);

function getInitialMode() {
  const savedMode = window.localStorage.getItem(STORAGE_KEY);
  return savedMode === "dark" || savedMode === "light" ? savedMode : "light";
}

export function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(getInitialMode);
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode(currentMode => {
      const nextMode = currentMode === "light" ? "dark" : "light";
      window.localStorage.setItem(STORAGE_KEY, nextMode);
      return nextMode;
    });
  };

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error("useThemeMode must be used within ThemeModeProvider");
  }

  return context;
}
