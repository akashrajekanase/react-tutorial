import React, {useState} from 'react'


export default function (props) {
    
    const [text, setText] = useState("Enter Text Here");
    const handleUpText = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
  return (
    <div>
        
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" className="form-label">Example textarea</label> */}
        <textarea className="form-control my-2" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div> 
        <button className="btn btn-primary" onClick={handleUpText}>Convert to UpperCase</button>
    </div>
  )
}
