import React, {useState} from 'react'


export default function TextForm(props) {
    
    const [text, setText] = useState("Enter Text Here");
    const handleUpText = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleDownText = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
  return (

    <>
    <div className='container'>
        
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" className="form-label">Example textarea</label> */}
        <textarea className="form-control my-2" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div> 
        <button className="btn btn-primary mx-3" onClick={handleUpText}>Convert to UpperCase</button>
        <button className="btn btn-primary" onClick={handleDownText}>Convert to LowerCase</button>
    </div>

    <div className="container my-3">
        <h1>Your Text Summary is </h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} minutes read</p>

        <h2>Preview</h2>
        <p>{text}</p>
    </div>

    </>
  )
}
