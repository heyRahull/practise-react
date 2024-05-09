import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext(); //step 1 -creating a context

const ThemeProvider = ({ children }) => {
  //step 2 - Providing the context
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

const ThemeSwitcher = () => {
  const { theme, handleToggle } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme == "light" ? "white" : "black" }}>
      <h1>Theme Switchwer App</h1>
      <button onClick={handleToggle}>Toggle Theme</button>
      <p>Current theme is : {theme} </p>
    </div>
  );
};

const Greet = () => {
  const { theme, handleToggle } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme == "light" ? "white" : "black" }}>
      <h1>Hello World</h1>
      <button onClick={handleToggle}>Toggle Button</button>
      <p>Current theme is : {theme}</p>
    </div>
  );
};

export const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <ThemeSwitcher />
        <Greet />
      </ThemeProvider>
    </div>
  );
};
