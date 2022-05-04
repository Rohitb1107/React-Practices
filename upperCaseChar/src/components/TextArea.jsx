import React, { useState } from "react";

function TextArea(props) {
  const [text, setText] = useState("");

  function handleUpperText() {
    var newValue = text.toUpperCase();
    setText(newValue);
  }

  function handleLowerText() {
    var newValue = text.toLowerCase();
    setText(newValue);
  }

  function clearText() {
    var newValue = "";
    setText(newValue);
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  
  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label my-3"
          >
            <h2>{props.Heading}</h2>
          </label>
          <textarea
            onChange={handleChange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
          ></textarea>
          <button onClick={handleUpperText} className="btn btn-success my-3">
            Convert to Uppercase
          </button>
          <button
            onClick={handleLowerText}
            className="btn btn-primary my-3 mx-2"
          >
            Convert to Lowercase
          </button>
          <button onClick={clearText} className="btn btn-danger my-3">
            Clear Text
          </button>
          <button className="btn btn-info mx-2">
            Change mode
          </button>
        </div>
      </div>
      <div className="container">
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length - 1} Words and {text.length} Characters
        </p>
        <h4>Preview Text</h4>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextArea;
