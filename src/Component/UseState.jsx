import React, { useState } from "react";
import "../App.css";
import { Button } from "react-bootstrap";
function UseState() {
  const [text, setText] = useState("Enter some value here");

  // For target value of textarea.
  const onchangeHandler = (e) => {
    setText(e.target.value);
  };

  // For Convert to upercase.
  const toUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if (text === "") {
      alert("Enter some text here to convert");
    }
  };
  const toLoCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if (text === "") {
      alert("Enter some text here to convert");
    }
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <h1 className="text-start py-4">Enter some text here</h1>
            <textarea
              name="Text"
              className="p-3"
              value={text}
              onChange={onchangeHandler}
              cols="150"
              rows="10"
            ></textarea>
            <Button onClick={toUpCase} className="mx-2">
              Convert to uppercase
            </Button>
            <Button onClick={toLoCase}>Convert to lowercase</Button>

            <h1 className="text-start">Preview of textarea : </h1>
            <p className="text-start">{text}</p>
            <h2>Lenght of this text: {text.length}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default UseState;
