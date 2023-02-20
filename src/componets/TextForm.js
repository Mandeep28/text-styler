// import { useState } from "react";
import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // handle the text on change
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
// download the file 
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


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
  // remove the extra spaces from the text
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  //  Capitalized the text from the text
  const handleCapitalized = () => {
    let newText = text.toLowerCase().split(' ');
    for (let i = 0; i < newText.length; i++) {
   newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].substring(1);
 }
  setText(newText.join(" "));
    props.showAlert("Convert to capitalized!", "success");
  };

  const handleSave =()=>{
    download("MyNotes.txt",text);
    props.showAlert("Text download successfully!", "success");
  }



  // custom style "css"
  let myStyle = {
    backgroundColor: props.mode === "dark" ? "black" : "white",
    color: props.mode === "dark" ? "white" : "black",
  };
  if (props.color !== null) {
    myStyle.backgroundColor = props.color;
  }

  // component start
  return (
    <>
      <div className="mb-3 " style={myStyle}>
        <h2 className="my-4 text-capitalize">{props.heading} </h2>
        <textarea
          className="form-control my-3 border border-primary"
          style={myStyle}
          id="text"
          value={text}
          onChange={handleOnChange}
          rows="6"
        ></textarea>

        <button
          className="btn btn-primary mx-2 my-2"
          disabled={text.length === 0}
          onClick={handleUpperCase}
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          disabled={text.length === 0}
          onClick={handleLowerCase}
        >
          Covert to Lower Case
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          disabled={text.length === 0}
          onClick={handleCapitalized}
        >
          Covert to Capitalized
        </button>

        <button
          className="btn btn-primary mx-2 my-2"
          disabled={text.length === 0}
          onClick={handleClearText}
        >
          ClearText
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          disabled={text.length === 0}
          onClick={handleCopyText}
        >
          CopyText
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          disabled={text.length === 0}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          disabled={text.length === 0}
          onClick={handleSave}
        >
          Save it
        </button>
      </div>
      <div className="container" style={myStyle}>
        <h3 className="text-capitalize">Your text summary</h3>
        <p className="text-capitalize">
          {
            text.split(/\s+/).filter((item) => {
              return item.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((item) => {
              return item.length !== 0;
            }).length}{" "}
          minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to Preview !!!"}</p>
      </div>
    </>
  );
}
