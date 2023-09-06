import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClicked = () => {
    setText(text.toUpperCase());
    props.showAlert("Text Uppercase Successfully","success");
  };
  const handleLoClicked = () => {
    setText(text.toLowerCase());
    props.showAlert("Text Lowercase Successfully","success");
  };
  function handleOnChange(event) {
    let v= event.target.value;
    v = v.replaceAll("  "," ");
    setText(v);

  }
  function handleClearClicked(event) {
    setText("");
    props.showAlert("Clear Text Successfully","success");
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3 container ">
        <h1 className="h-primary" >Enter a Text to Analyse: </h1>
       
       
        <textarea  className="container"  style = {{border: '2px solid black',color: props.mode==='dark'?'white':'black',cursor: 'default' , backgroundColor: props.mode==='dark'?'grey':'white'}}   onChange={handleOnChange}  rows="8"  value={text}>
        </textarea><br/>
        <button disabled={text.length === 0} className="btn bg-primary border border-white mx-1 my-1 " onClick={handleUpClicked}>
          {"Convert into UpperCase"}
        </button>
        <button disabled={text.length === 0} className="btn bg-primary border border-white mx-1 my-1" onClick={handleLoClicked}>
          {"Convert into LowerCase"}
        </button>
        <button disabled={text.length === 0} className="btn bg-primary border border-white mx-1 my-1" onClick={handleClearClicked}>
          Clear
        </button>
      
      <div className="container">
        <h1>Summary:</h1>
        <p>
          {text.split(" ").filter((ele)=>{return ele.length !== 0}).length} words and {text.trim().length} characters
        </p>
        <p>{0.008*text.split(" ").filter((ele)=>{return ele.length !== 0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview right here"}</p>
      </div>
      </div>
    </>
  );
}
