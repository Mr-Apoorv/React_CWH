import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const clickUpHandler = () => {
    let uppercaseText = text.toUpperCase();
    setText(uppercaseText);
    props.showAlert("Text changed to uppercase", "success");
  };

  const clickLowHandler = () => {
    let lowercaseText = text.toLowerCase();
    setText(lowercaseText);
    props.showAlert("Text changed to lowercase", "success");
  };

  const clickClearHandler = () => {
    let clearText = "";
    setText(clearText);
    props.showAlert("Text cleared", "success");
  };

  const clickCopyHandler = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard", "success");
  };

  const removeSpacesHandler = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  const wordCount = (text) => {
    let trimmedWord = text.trim();
    if (trimmedWord.length === 0) {
      return 0;
    }

    let wordNo = trimmedWord.split(" ");
    let nonEmptyWord = wordNo.filter((word, index) => {
      return word[index] !== " ";
    });
    return nonEmptyWord.length;
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
            style={{
              backgroundColor: props.mode === "light" ? "white" : "gray",
              color: props.mode === "light" ? "black" : "white",
            }}
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
        <button className="btn btn-primary mx-2" onClick={clickCopyHandler}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2" onClick={removeSpacesHandler}>
          Remove extra spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>
          Your text has {wordCount(text)} words and {text.length} characters
        </p>
        <p>Reading time is {0.008 * text.split(" ").length} minutes</p>
        <h2>Preview of text</h2>
        <pre>
          {text.length > 0
            ? text
            : "Enter some text in the text box above to preview here"}
        </pre>
      </div>
    </>
  );
}
