import React, { useState, Fragment } from "react";
import "./App.css";

import Header from "./components/Header";
import Screen from "./components/Screen";
import CalcButtons from "./components/CalcButtons";
import Clear, { BackSpace, Calculate } from "./components/OpButtons";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <Header />
      <div className="container">
        <Screen result={result} />

        <div className="keypad">
          <Clear clear={clear} />
          <BackSpace backspace={backspace} />
          <CalcButtons click={handleClick} />
          <Calculate calculate={calculate} />
        </div>
      </div>
    </div>
  );
};

export default App;
