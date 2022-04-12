import React from "react";
import "./App.css";
import TextInput from "./Components/TextInput";
import DateInput from "./Components/DateInput";

const App = () => {
  return (
    <div className="container">
      <ul className="cards">
        <TextInput />
        <DateInput />
        <li className="NumberInput cards-item">
          <div className="card">
            <div className="card-content">
              <div className="card-title">Number</div>
              <div className="card-text">
                <div className="input btn-block">
                  <input type="number" className="textInput" />
                </div>
                <div className="output">
                  <label htmlFor="numberOutput">State: </label>
                  <span name="numberOutput"></span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="ButtonInput cards-item">
          <div className="card">
            <div className="card-content">
              <div className="card-title">Button</div>
              <div className="card-text">
                <div className="input btn-block">
                  <input type="button" value="Click me!" className="btn" />
                </div>
                <div className="output">
                  <label htmlFor="buttonOutput">State: </label>
                  <span name="buttonOutput"></span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="RadioInput cards-item">
          <div className="card">
            <div className="card-content">
              <div className="card-title">Radio</div>
              <div className="card-text">
                <div className="input">
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
                  <span name="radioOutput"></span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="ColorInput cards-item">
          <div className="card">
            <div className="card-content">
              <div className="card-image"></div>
              <div className="card-title">Color</div>
              <div className="card-text">
                <div className="input btn-block">
                  <input type="color" className="colorButton" />
                </div>
                <div className="output">
                  <label htmlFor="colorOutput">State: </label>
                  <span name="colorOutput"></span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="CheckboxInput cards-item">
          <div className="card">
            <div className="card-content">
              <div className="card-title">Checkbox</div>
              <div className="card-text">
                <div className="input">
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
                  <span name="checkboxOutput"></span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="RangeInput cards-item">
          <div className="card">
            <div className="card-content">
              <div className="card-image"></div>
              <div className="card-title">Range Slider</div>
              <div className="card-text">
                <div className="input">
                  <input type="range" className="rangeInput" />
                </div>
                <div className="output">
                  <label htmlFor="rangeOutput">State: </label>
                  <span name="rangeOutput"></span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="SelectInput cards-item">
          <div className="card">
            <div className="card-content">
              <div className="card-image"></div>
              <div className="card-title">Select</div>
              <div className="card-text">
                <div className="input">
                  <select className="selectInput">
                    <option value="">Choose one:</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Fish">Fish</option>
                    <option value="Horse">Horse</option>
                  </select>
                </div>
                <div className="output">
                  <label htmlFor="selectOutput">Image: </label>
                  <span name="selectOutput"></span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="UrlInput cards-item">
          <div className="card">
            <div className="card-content">
              <div className="card-title">URL</div>
              <div className="card-text">
                <div className="input btn-block">
                  <input
                    type="url"
                    placeholder="Type a URL here!"
                    className="textInput"
                  />
                </div>
                <div className="output">
                  <label htmlFor="urlOutput">State: </label>
                  <span name="urlOutput">
                    <a
                      href="http://"
                      id="url"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      &nbsp;
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default App;
