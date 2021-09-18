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
    document.getSelection().removeAllRanges();
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

    let wordNo = trimmedWord.split(/\s+/);
    let nonEmptyWord = wordNo.filter((word, index) => {
      return word.length !== 0;
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
              backgroundColor: props.mode === "light" ? "white" : "#212f69",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={clickUpHandler}
        >
          Change to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={clickLowHandler}
        >
          Change to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={clickClearHandler}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={clickCopyHandler}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={removeSpacesHandler}
        >
          Remove extra spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>
          Your text has {wordCount(text)} words and {text.length} characters
        </p>
        <p>
          Reading time is{" "}
          {0.008 *
            text.split(/\s+/).filter((word) => {
              return word.length !== 0;
            }).length}{" "}
          minutes
        </p>
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
