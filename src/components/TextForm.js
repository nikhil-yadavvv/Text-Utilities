import React ,{useState} from 'react';
//usestate is a hook that let use use state and other react features without writiing class
//handeling event nad set state

const TextForm = (props) => {

    const handleuppercase = () =>{
        // console.log("Uppercase"+ text);
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handlelowercase = () =>{
        // console.log("Uppercase"+ text);
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleOnChange = (event) =>{
        // console.log("Onchange");
        setText(event.target.value); 
    };
    //onchange lagate hi saare error chale gaye

    const handleClear = () =>{
        let newText = "";
        setText(newText)
    };

    //not working
    const handleCopy = () =>{
        var newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);

    };

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    };





    const [text, setText] = useState("");//it will go to text
    //to update text use setText
    //text = "sdfsfds"   not correct instead use this to update
    // setText("anything here");


    return (
    <>
    <div className='container1'>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    {/* <label for="mybox" calssName="form-label">Example textarea</label> */}
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode ==='light' ?'white' :'grey' , color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button className = "btn btn-primary mx-1" onClick={handleuppercase}>Convert to Upper Case</button>
    <button className = "btn btn-primary mx-1" onClick={handlelowercase}>Convert to Lower Case</button>
    <button className = "btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
    <button className = "btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button className = "btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <br/>
    <div className='container2'>
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Takes {text.split(" ").length* 0.008} minutes to read</p>
        <h2>Text Preview</h2>
        <p>{text}</p>

    </div>
    </>
    )
}


export default TextForm;