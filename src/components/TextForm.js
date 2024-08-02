import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("success", "Text converted to Upper Case");
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("success", "Text converted to Lower Case");

    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("success", "Text Cleared");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("success", "Text Copied to clipboard");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("success", "Extra Spaces Removed from the text");

    }

    return (
        <>
            <div className='container' style={{ color: props.mode === "light" ? "black" : "white" }}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea placeholder='Enter text here' name="" onChange={handleOnChange} className={`form-control bg-${props.mode === "light" ? "white" : "dark"} text-${props.mode === "light" ? "black" : "white"}`} value={text} id="myBox" cols="30" rows="10"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary my-1" onClick={handleUpClick} id='btnUpper'>Upper Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick} id='btnUpper'>Lower Case</button>
                <button disabled={text.length === 0} className="btn btn-primary my-1" onClick={handleClearClick} id='btnUpper'>Clear Text</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2>Your Text Summary</h2>
                <p><b>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</b> Words, <b>{text.length}</b> Characters</p>
                <p><b>{(0.008 * (text.split(/\s+/).filter((element) => { return element.length !== 0 }).length)).toFixed(2)}</b> Minutes to read</p>
                <h3>Preview</h3>
                <p style={{ padding: "10px", borderWidth: "2px", borderStyle: "solid", borderColor: props.mode === "light" ? "black" : "white" }}>{text.length > 0 ? text : ".........Nothing to preview!......."}</p>
            </div>
        </>
    )
}
