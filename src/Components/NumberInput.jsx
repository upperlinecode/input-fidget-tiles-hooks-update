import React, { useState } from "react";

const NumberInput = () => {
  const [num, setNum] = useState(0);

  // The event will be passed in automatically.
  const handleChange = (event) => {
    setNum(event.target.value);
  };

  return (
    <li className="NumberInput cards-item">
      <div className="card">
        <div className="card-content">
          <div className="card-title">Number</div>
          <div className="card-text">
            <div className="input btn-block">
              <input
                type="number"
                className="textInput"
                onChange={handleChange}
              />
            </div>
            <div className="output">
              <label htmlFor="numberOutput">State: </label>
              <span name="numberOutput">{num}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default NumberInput;
