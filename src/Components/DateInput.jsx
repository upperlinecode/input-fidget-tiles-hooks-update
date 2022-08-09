import React, { useState } from "react";
// import { useState } from "react";

const DateInput = () => {
  // Initialize some state variables (be sure to import useState above)
  const [date, setDate] = useState("");

  // The event will be passed in automatically.
  const handleChange = (event) => {
    setDate(event.target.value);
  };
  return (
    <li className="cards-item">
      <div className="card">
        <div className="card-content">
          <div className="card-title">Date</div>
          <div className="card-text">
            <div className="input btn-block">
              <input
                type="date"
                className="textInput"
                onChange={handleChange}
              />
            </div>
            <div className="output">
              <label htmlFor="dateOutput">State: </label>
              <span name="dateOutput">{date}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default DateInput;
