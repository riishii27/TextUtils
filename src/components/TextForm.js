import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText] = useState('')
    
    const handleUpClick= ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick= ()=>{
      let newText= text.toLowerCase();
      setText(newText)
    }
    const handleClearClick=()=>{
      let newText = ""
      setText(newText)
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    const handleColorClick=(text)=>{
      let newText= text
      setText(newText)
    }
    const handleOnchange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    
    




  return (<>
    <div className="container" >
    <div className="mb-3">
  <b><label htmlFor="myBox" className="form-label">{props.text} </label></b>
  <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
  </div>
  <button type="button" className="btn btn-dark mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button type="button" className="btn btn-dark mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
  <button type="button" className="btn btn-dark mx-2" onClick={handleClearClick}>Clear Text</button>
  <button type="submit" onClick={speak} className="btn btn-dark mx-2 my-2">Speak</button>
 
</div>
<div className='container my-3'>
  <h1>Your Text Summary</h1>
  <p> {text.split("").length} words and {text.length} characters</p>
  <p>{0.008 * text.split("").length}Average time to read theese words</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>
  )}

