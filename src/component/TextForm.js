import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClicked = () => {
    setText(text.toUpperCase());
  };
  const handleLoClicked = () => {
    setText(text.toLowerCase());
  };
  function handleOnChange(event) {
    setText(event.target.value);
  }
  function handleClearClicked(event) {
    setText("");
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3 container">
        <h1 className="h-primary" style={{marginTop: '15px'}} >Enter a Text to Analyse: </h1>
       
       
        <textarea  className="container"  style = {{border: '2px solid black',color: props.mode==='dark'?'white':'black',cursor: 'default' , backgroundColor: props.mode==='dark'?'grey':'white'}}   onChange={handleOnChange}  rows="8"  value={text}>
        </textarea>
        <button className="btn btn-primary" onClick={handleUpClicked}>
          {"Convert into UpperCase"}
        </button>
        <button className="btn btn-primary" onClick={handleLoClicked}>
          {"Convert into LowerCase"}
        </button>
        <button className="btn btn-primary" onClick={handleClearClicked}>
          Clear
        </button>
      </div>
      <div className="container">
        <h1>Summary:</h1>
        <p>
          {text.split(" ").length===1?(text.length===0?0:text.split(" ").length):text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
