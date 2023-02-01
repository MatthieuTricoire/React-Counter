import { useState } from "react";
const Section = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter column">
      <div className="action row">
        <button
          className={`minus
          reset-btn ${counter < 1 && "hidden"}`}
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <div
          className="result
        row"
        >
          {counter}
        </div>
        <button
          className={`reset-btn plus ${counter > 9 && "hidden"}
          `}
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="reset row">
        <button
          className="btn-reset reset-btn"
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Section;
