import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here");

  const clickHandler = () => {
    let uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  };

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
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
      <button className="btn btn-primary" onClick={clickHandler}>
        Change to uppercase
      </button>
    </div>
  );
}
