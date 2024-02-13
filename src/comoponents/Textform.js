import React, { useState } from "react";


export default function Textform(props) {

  const handleclick = () => {
    console.log("button was clicked");
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("converted into Uppercase","success")
  };

  const handlelowerclick = () => {
    console.log("button was clicked");
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showalert("converted into Lowercase","success")
  };

  const extraspaces = () => {
    console.log("button was clicked");
    let newtext = text.replace(/\s+/g, " ");
    settext(newtext);
    props.showalert("Extra spaces got removed","success")
  };

  const handle = () => {
    console.log("button was clicked");
    let newtext = "";
    settext(newtext);
  };

  const handlechange = (event) => {
    console.log("on change");
    settext(event.target.value);
    
  };

  const [text, settext] = useState("");

  return (
    <>
      <div className="container" >
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handlechange}
            placeholder="Enter your text here "
            id="floatingTextarea2"
            rows="8"
          />
        </div>
        <button className="btn btn-primary mx-1" onClick={handleclick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handlelowerclick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handle}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={extraspaces}>
          Clear extra spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          <b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b>{" "}
          characters
        </p>
        <p><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textarea!..."}</p>
      </div>
    </>
  );
}
