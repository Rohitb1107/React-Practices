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
        </div>
        <button onClick={handleClick} className="btn btn-primary">
          Click me
        </button>
      </div>
    </>
  );
}

export default TextArea;
