import { createContext, useState } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Dark");
  const toogleTheme = () => {
    if (theme === "Light") {
      setTheme("Dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setTheme("Light");
      window.localStorage.setItem("theme", "light");
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
