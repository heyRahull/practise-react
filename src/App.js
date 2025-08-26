import "./App.css";
import TodoCheckbox from "./components/1-TodoCheckbox";
import Parent from "./components/Parent";
import Practise2 from "./components/Practise2";
import React from "react";
import { ThemeProvider } from "./components/ThemeContext.js";
import ThemeSwitcher from "./components/ThemeSwitcher.js";
import Greet from "./components/Greet.js";
import Greetings from "./components/Greetings.jsx";

function App() {
  return (
    <div className="App">
      <Greetings name="Rahul"/>
    </div>
  );
}

export default App;
