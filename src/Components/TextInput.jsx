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
          <p className="card-text">
            <div className="input btn-block">
              <input
                type="text"
                placeholder="Write here!"
                className="textInput"
                onChange={handleChange}
              />
            </div>
            <div className="output">
              <label for="textOutput">State: </label>
              <span name="textOutput">{text}</span>
            </div>
          </p>
        </div>
      </div>
    </li>
  );
};

export default TextInput;
