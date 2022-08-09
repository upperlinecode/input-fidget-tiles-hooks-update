import React from "react";
import { useState } from "react";

const RadioInput = () => {
  const [value, setValue] = useState("");

  // The event will be passed in automatically.
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <li className="RadioInput cards-item">
      <div className="card">
        <div className="card-content">
          <div className="card-title">Radio</div>
          <div className="card-text">
            <div className="input" onClick={handleChange}>
              <input
                type="radio"
                name="radioInput"
                value="1"
                className="checkboxInput"
              />
              <input
                type="radio"
                name="radioInput"
                value="2"
                className="checkboxInput"
              />
              <input
                type="radio"
                name="radioInput"
                value="3"
                className="checkboxInput"
              />
              <input
                type="radio"
                name="radioInput"
                value="4"
                className="checkboxInput"
              />
              <input
                type="radio"
                name="radioInput"
                value="5"
                className="checkboxInput"
              />
            </div>
            <div className="output">
              <label htmlFor="radioOutput">State: </label>
              <span name="radioOutput">{value}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default RadioInput;
