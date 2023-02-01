import { useState } from "react";
const Section = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter row">
      <div className="action row">
        <button
          className={`minus
          reset-button ${counter < 1 && "hidden"}`}
          //   <span className={counter <= 10 ? "green" : "red"}>{counter}</span>

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
          className={`reset-button plus ${counter > 9 && "hidden"}
          `}
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="reset"></div>
    </div>
  );
};

export default Section;
