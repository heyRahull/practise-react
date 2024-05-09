import { useTheme } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { theme, handleToggle } = useTheme();
  return (
    <div style={{ backgroundColor: theme == "light" ? "white" : "black" }}>
      <h1>Theme Switcher App</h1>
      <button onClick={handleToggle}>Toggle Theme</button>
      <p>Current theme is : {theme} </p>
    </div>
  );
};

export default ThemeSwitcher;
