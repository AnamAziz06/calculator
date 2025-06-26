import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [num1, setNum1] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNum2, setWaitingForNum2] = useState(false);

  const handleNumberClick = (value) => {
    if (waitingForNum2) {
      setInput(value);         // Start fresh for second number
      setWaitingForNum2(false);
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleOperatorClick = (op) => {
    if (input === "") return;
    setNum1(parseFloat(input));
    setOperator(op);
    setWaitingForNum2(true);           // next number will be second one
  };

  const handleEqualClick = () => {
    if (num1 === null || input === "") return;

    const num2 = parseFloat(input);
    let result = 0;

    switch (operator) {
      case "+": result = num1 + num2; break;
      case "-": result = num1 - num2; break;
      case "*": result = num1 * num2; break;
      case "/": result = num1 / num2; break;
      default: return;
    }

    setInput(result.toString());
    setNum1(null);
    setOperator(null);
    setWaitingForNum2(false);
  };

  const clear = () => {
    setInput("");
    setNum1(null);
    setOperator(null);
    setWaitingForNum2(false);
  };

  return (
    <div className="calculator">
      <h2>React Calculator (Safe)</h2>
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <button onClick={clear}>C</button>
        <button onClick={() => handleNumberClick("7")}>7</button>
        <button onClick={() => handleNumberClick("8")}>8</button>
        <button onClick={() => handleNumberClick("9")}>9</button>
        <button onClick={() => handleOperatorClick("/")}>/</button>
        <button onClick={() => handleNumberClick("4")}>4</button>
        <button onClick={() => handleNumberClick("5")}>5</button>
        <button onClick={() => handleNumberClick("6")}>6</button>
        <button onClick={() => handleOperatorClick("*")}>*</button>
        <button onClick={() => handleNumberClick("1")}>1</button>
        <button onClick={() => handleNumberClick("2")}>2</button>
        <button onClick={() => handleNumberClick("3")}>3</button>
        <button onClick={() => handleOperatorClick("-")}>-</button>
        <button onClick={() => handleNumberClick("0")}>0</button>
        <button onClick={() => handleNumberClick(".")}>.</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={() => handleOperatorClick("+")}>+</button>
      </div>
    </div>
  );
}

export default App;
