import React ,{useState} from 'react';
//usestate is a hook that let use use state and other react features without writiing class
//handeling event nad set state

const TextForm = (props) => {
    const handleuppercase = () =>{
        // console.log("Uppercase"+ text);
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleOnChange = (event) =>{
        // console.log("Onchange");
        setText(event.target.value); 
    };
    //onchange lagate hi saare error chale gaye

    const [text, setText] = useState("Enter text here...");//it will go to text
    //to update text use setText
    //text = "sdfsfds"   not correct instead use this to update
    // setText("anything here");


    return <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    {/* <label for="mybox" calssName="form-label">Example textarea</label> */}
    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
    </div>
    <button className = "btn btn-primary" onClick={handleuppercase}>Convert to UpperCase</button>
    </div>;
}


export default TextForm;