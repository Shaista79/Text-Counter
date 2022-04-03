import React,{useState} from "react";



export default function TextForm(props) {
const [text,setText]=useState("");

const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper Case",'success');
}
const handleOnChange=(event)=>{
    setText(event.target.value)
}
const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case",'success');
}
const clearText=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text Deleted successfully",'success');
}
const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to ClipBoard",'success');
}
const removeExtraSpaces=()=>{
   let newText=text.split(/[ ]+/);
   setText(newText.join(" "))
   props.showAlert("Removed Extra Spaces successfully",'success');
}

  return (
      <>
    <div className="container" style={{color:props.mode==="dark"?"white":'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":'white',color:props.mode==="dark"?"white":'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
      <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":'black'}}>
        <h2>Paragrapgh Summary</h2>
        <p>{text.split(" ").length} Words and length is {text.length}</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something above to preview"}</p>
    </div>
    </>
  );
}
