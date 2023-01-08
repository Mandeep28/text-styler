// import { useState } from "react";
import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // handle the text on change
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  // handle the text on click on "convert uppercase" btn
  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to upperCase", "success");
  };
  // handle the text on click on "convert lowercase" btn
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to LowerCase", "success");
  };

  // handle the text on click on "clearText" btn
  const handleClearText = () => {
    setText("");
    props.showAlert("Text Cleard", "warning");
  };

  // handle the text on click on "copyText" btn
  const handleCopyText = () => {
    const copyText = text;
    navigator.clipboard.writeText(copyText);
    props.showAlert("Copy to Clipboard", "success");
  };
  // custom style "css"
  let myStyle = {
    backgroundColor: props.mode === "dark" ? "black" : "white",
    color: props.mode === "dark" ? "white" : "black",
  };
  if (props.color !== null) {
    myStyle.backgroundColor = props.color;
  }
  // function to count words
  const countWords = (str) => {
    let words;
    if (text === "") {
      words = 0;
    } else {
      words = str.trim().split(/\s+/).length;
    }
    return words;
  };
  // component start
  return (
    <>
      <div className="mb-3 " style={myStyle}>
        <h2 className="my-3">{props.heading} </h2>
        <textarea
          className="form-control my-3 border border-primary"
          style={myStyle}
          id="text"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>

        <button className="btn btn-primary mx-2" onClick={handleUpperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>
          Covert to Lower Case
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClearText}>
          ClearText
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>
          CopyText
        </button>
        {/* <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button> */}
      </div>
      <div className="container" style={myStyle}>
        <h3>Your text summary</h3>
        <p>
          {countWords(text)} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the above textBox to preview"}
        </p>
      </div>
    </>
  );
}
