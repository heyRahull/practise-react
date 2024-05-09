import { useTheme } from "./ThemeContext";

const Greet = () => {
  const { theme, handleToggle } = useTheme();
  return (
    <div style={{ backgroundColor: theme == "light" ? "white" : "black" }}>
      <h1>Hello World</h1>
      <button onClick={handleToggle}>Toggle Button</button>
      <p>Current theme is : {theme}</p>
    </div>
  );
};

export default Greet;
