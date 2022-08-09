import React, { useState } from "react";

const ButtonInput = () => {
  // Initialize your state variables
  const [buttonState, setButtonState] = useState(false);

  // The event will be passed in automatically.
  const handleChange = (event) => {
    setButtonState(!buttonState)
  };

  // Return some JSX
  return (
    <li className="ButtonInput cards-item">
      <div className="card">
        <div className="card-content">
          <div className="card-title">Button</div>
          <div className="card-text">
            <div className="input btn-block">
              <input
                type="button"
                value="Click me!"
                className="btn"
                onClick={handleChange}
              />
            </div>
            <div className="output">
              <label htmlFor="buttonOutput">State: </label>
              <span name="buttonOutput">{buttonState.toString()}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ButtonInput;
