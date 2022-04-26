import React, { useState } from "react";

function TextArea(props) {
  const [text, setText] = useState("");

  function handleClick() {
    var newValue = text.toUpperCase();
    setText(newValue);
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.Heading}
          </label>
          <textarea
            onChange={handleChange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
          ></textarea>
          <button onClick={handleClick} className="btn btn-primary my-3">
            Click me
          </button>
        </div>
      </div>
      <div className="container">
        <h3>Your Text Summary</h3>
        <p>321 World and 4875 Characters</p>
      </div>
    </>
  );
}

export default TextArea;
