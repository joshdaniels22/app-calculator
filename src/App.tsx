import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");
  const [output, setOutput] = useState(0);
  const numbers = [
    { display: "1", value: 1 },
    { display: "2", value: 2 },
    { display: "3", value: 3 },
    { display: "4", value: 4 },
    { display: "5", value: 5 },
    { display: "6", value: 6 },
    { display: "7", value: 7 },
    { display: "8", value: 8 },
    { display: "9", value: 9 },
    { display: "0", value: 0 },
  ];

  function handleNumberClick(numberDisplay: string) {
    setDisplay((display) => display + numberDisplay);
  }

  const plus = "+";

  return (
    <>
      <div>
        <p>{display}</p>
        {numbers.map((number) => (
          <button onClick={() => handleNumberClick(number.display)}>
            {number.display}
          </button>
        ))}

        <button
          onClick={() => handleNumberClick(plus)}
          type="button"
          className="btn btn-primary"
        >
          {plus}
        </button>

        <button
          onClick={() => setDisplay("")}
          type="button"
          className="btn btn-danger"
        >
          Clear
        </button>

        <button
          onClick={() => setOutput(eval(display))}
          type="button"
          className="btn btn-warning"
        >
          =
        </button>

        <p>{output}</p>
      </div>
    </>
  );
}

export default App;
