import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext(); //step 1 -creating a context

//step 2 - Providing the context
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const handleToggle = () => {
    return setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); //step3 - Consuming context using useContext hook
