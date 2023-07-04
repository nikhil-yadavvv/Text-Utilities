import React from 'react';


const About = (props) => {

    // const[myStyle , setMyStyle] = useState({
    //     color : "white",
    //     backgroundColor: "black"
    // })

    // const [btnText,setBtnText] = useState("Light Mode")

    // const toggleStyle = () =>{
    //     if (myStyle.color === "white") {
    //         setMyStyle({
    //             color : "black",
    //     backgroundColor: "white"
    //         })
    //         setBtnText("Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color : "white",
    //     backgroundColor: "black"
    //         })
    //         setBtnText("Light Mode")
    //     }
    // }

    return (
    <div>
        <div className="card " >
        {/* <div calssName="card-header">
        Featured
        </div> */}
        <div className="card-body" style={{backgroundColor : props.mode ==='light' ?'white' :"#343a40" , color: props.mode==='dark'?'white':'black'}}>
        <h2 className="card-title">About Us</h2>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.
        With supporting text below as a natural lead-in to additional content.
        With supporting text below as a natural lead-in to additional content.
        With supporting text below as a natural lead-in to additional content.
        With supporting text below as a natural lead-in to additional content.
        With supporting text below as a natural lead-in to additional content.
        With supporting text below as a natural lead-in to additional content.</p>
        <a href="/" className="btn btn-primary">Home</a>
        </div>
        </div>
        <br/>
        {/* <button type='button' onClick={toggleStyle} className='btn btn-primary'>{btnText}</button> */}
     </div>
    )
}



export default About;