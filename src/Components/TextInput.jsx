import React, { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState("");

  // The event will be passed in automatically.
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <li className="TextInput cards-item">
      <div className="card">
        <div className="card-content">
          <div className="card-title">Text</div>
          <div className="card-text">
            <div className="input btn-block">
              <input
                type="text"
                placeholder="Write here!"
                className="textInput"
                onChange={handleChange}
              />
            </div>
            <div className="output">
              <label htmlFor="textOutput">State: </label>
              <span name="textOutput">{text}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TextInput;
