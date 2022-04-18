import React from "react";
import logo from "../image/gear.png";

const Display = () => {
  const [display, setDisplay] = React.useState("399");
  const [currentDisplay, setCurrentDisplay] = React.useState(0);

  const del = () => {
    try {
      setDisplay(display.slice(0, -1));
    } catch {
      setDisplay("");
    }
  };
  const calculate = () => {
    try {
      setCurrentDisplay(eval(display));
    } catch (e) {
      setDisplay("Error");
    }
  };

  const reset = () => {
    setDisplay("");
    setCurrentDisplay(0);
  };

  return (
    <div>
      <div className="calc__display">
        <button className="calc__display-settings">
          <img src={logo} alt="gear" className="calc__img" />
        </button>
        <p className="calc__display-value--previous" data-previous-value="">
          {display}
        </p>
        <p className="calc__display-value--current" data-current-value="">
          {currentDisplay}
        </p>
      </div>

      <div className="calc__keypad">
        <button
          className="calc__key--num"
          value={7}
          onClick={(e) => setDisplay(display + e.target.value)}
        >
          7
        </button>
        <button
          className="calc__key--num"
          value={8}
          onClick={(e) => setDisplay(display + e.target.value)}
        >
          8
        </button>
        <button
          className="calc__key--num"
          value={9}
          onClick={(e) => setDisplay(display + e.target.value)}
        >
          9
        </button>
        <button className="calc__key--spec" onClick={() => del()}>
          del
        </button>
        <button
          className="calc__key--num"
          value={4}
          onClick={(e) => setDisplay(display + e.target.value)}
        >
          4
        </button>
        <button
          className="calc__key--num"
          value={5}
          onClick={(e) => setDisplay(display + e.target.value)}
        >
          5
        </button>
        <button
          className="calc__key--num"
          value={6}
          onClick={(e) => setDisplay(display + e.target.value)}
        >
          6
        </button>
        <button
          className="calc__key--func"
          value="+"
          onClick={(e) => setDisplay(display + e.target.value)}
        >
          +
        </button>
        <button
          className="calc__key--num"
          value={1}
          onClick={(e) => setDisplay(display + e.target.value)}
        >
          1
        </button>
        <button
          className="calc__key--num"
          value={2}
          onClick={(e) => setDisplay(display + e.target.value)}
        >
          2
        </button>
        <button
          className="calc__key--num"
          value={3}
          onClick={(e) => setDisplay(display + e.target.value)}
        >
          3
        </button>
        <button
          className="calc__key--func"
          value="-"
          onClick={(e) => setDisplay(display + e.target.value)}
        >
          -
        </button>
        <button
          className="calc__key--num"
          value="."
          onClick={(e) => setDisplay(display + e.target.value)}
        >
          .
        </button>
        <button
          className="calc__key--num"
          value={0}
          onClick={(e) => setDisplay(display + e.target.value)}
        >
          0
        </button>
        <button
          className="calc__key--func"
          value="/"
          onClick={(e) => setDisplay(display + e.target.value)}
        >
          /
        </button>
        <button
          className="calc__key--func"
          value="*"
          onClick={(e) => setDisplay(display + e.target.value)}
        >
          x
        </button>
        <button
          className="calc__key--spec calc__key--span-two"
          onClick={() => reset()}
        >
          reset
        </button>
        <button
          className="calc__key--equal calc__key--span-two"
          onClick={() => calculate()}
        >
          &#61;
        </button>
      </div>
    </div>
  );
};

export default Display;
