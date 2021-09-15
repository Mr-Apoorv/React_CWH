import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const clickUpHandler = () => {
    let uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  };

  const clickLowHandler = () => {
    let lowercaseText = text.toLowerCase();
    setText(lowercaseText);
  };

  const clickClearHandler = () => {
    let clearText = "";
    setText(clearText);
  };

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>

          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={changeHandler}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={clickUpHandler}>
          Change to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={clickLowHandler}>
          Change to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={clickClearHandler}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>
          Your text has {text.split(" ").length} words and {text.length}{" "}
          characters
        </p>
        <p>Reading time is {0.008 * text.split(" ").length} minutes</p>
        <h2>Preview of text</h2>
        <pre>{text}</pre>
      </div>
    </>
  );
}
