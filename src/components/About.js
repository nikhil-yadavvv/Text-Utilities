import React, {useState}from 'react';


const About = () => {

    const[myStyle , setMyStyle] = useState({
        color : "white",
        backgroundColor: "black"
    })

    const [btnText,setBtnText] = useState("Light Mode")

    const toggleStyle = () =>{
        if (myStyle.color === "white") {
            setMyStyle({
                color : "black",
        backgroundColor: "white"
            })
            setBtnText("Dark Mode")
        }
        else{
            setMyStyle({
                color : "white",
        backgroundColor: "black"
            })
            setBtnText("Light Mode")
        }
    }

    return (
    <>
        <div className="card" style={myStyle}>
        {/* <div calssName="card-header">
        Featured
        </div> */}
        <div className="card-body">
        <h2 className="card-title">About Us</h2>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.
        With supporting text below as a natural lead-in to additional content.
        With supporting text below as a natural lead-in to additional content.
        With supporting text below as a natural lead-in to additional content.
        With supporting text below as a natural lead-in to additional content.
        With supporting text below as a natural lead-in to additional content.
        With supporting text below as a natural lead-in to additional content.</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        <br/>
        <button type='button' onClick={toggleStyle} className='btn btn-primary'>{btnText}</button>
     </>
    )
}



export default About;