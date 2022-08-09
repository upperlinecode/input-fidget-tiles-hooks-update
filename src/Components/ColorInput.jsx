import React, { useState } from "react";

const ColorInput = () => {
  const [color, setColor] = useState("");

  // CSS rulesets can be written as JS Objects, and passed in as inline style.
  const myStyle = {
    backgroundColor: color
  };

  // The event will be passed in automatically.
  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <li className="ColorInput cards-item">
      <div className="card">
        <div className="card-content">
          <div className="card-image" style={myStyle}></div>
          <div className="card-title">Color</div>
          <div className="card-text">
            <div className="input btn-block">
              <input
                type="color"
                className="colorButton"
                onChange={handleChange}
              />
            </div>
            <div className="output">
              <label htmlFor="colorOutput">State: </label>
              <span name="colorOutput">{color}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ColorInput;
