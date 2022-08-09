import React, { useState } from "react";
// import { useState } from "react";

const CheckboxInput = () => {
  // Initialize some state variables (be sure to import useState above)
  const [values, setValues] = useState([0, 0, 0, 0, 0]);

  // The event will be passed in automatically.
  const handleChange = (event) => {
    let idx = event.target.value - 1;
    let new_values = [...values];
    new_values[idx] = 1 - new_values[idx];
    setValues(new_values);
  };

  // Sum the array (could also code-golf this with ".reduce")
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    sum += values[i];
  }

  return (
    <li className="CheckboxInput cards-item">
      <div className="card">
        <div className="card-content">
          <div className="card-title">Checkbox</div>
          <div className="card-text">
            <div className="input" onClick={handleChange}>
              <input
                type="checkbox"
                name="checkboxInput"
                value="1"
                className="checkboxInput"
              />
              <input
                type="checkbox"
                name="checkboxInput"
                value="2"
                className="checkboxInput"
              />
              <input
                type="checkbox"
                name="checkboxInput"
                value="3"
                className="checkboxInput"
              />
              <input
                type="checkbox"
                name="checkboxInput"
                value="4"
                className="checkboxInput"
              />
              <input
                type="checkbox"
                name="checkboxInput"
                value="5"
                className="checkboxInput"
              />
            </div>
            <div className="output">
              <label htmlFor="checkboxOutput">Count: </label>
              <span name="checkboxOutput">{sum}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CheckboxInput;
