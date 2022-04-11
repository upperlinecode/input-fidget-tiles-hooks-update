import React from "react";
// import { useState } from "react";

const DateInput = () => {
  // Initialize some state variables (be sure to import useState above)

  return (
    <li className="cards-item">
      <div className="card">
        <div className="card-content">
          <div className="card-title">Date</div>
          <p className="card-text">
            <div className="input btn-block">
              <input type="date" className="textInput" />
            </div>
            <div className="output">
              <label for="dateOutput">State: </label>
              <span name="dateOutput"></span>
            </div>
          </p>
        </div>
      </div>
    </li>
  );
};

export default DateInput;
