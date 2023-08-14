import "./App.css";
import React, { useState } from "react";
import { Clock } from "./components/Clock";
import { Calc } from "./components/Calc";
import { createContext } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      <div className="mainpage" id={theme}>
        <Calc />
        <Clock />
        <div className="switch">
          <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
