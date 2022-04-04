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
    document.getSelection().removeAllRanges();
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
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"#13466e":'white',color:props.mode==="dark"?"white":'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lower Case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":'black'}}>
        <h2>Paragrapgh Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and length is {text.length}</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
}
