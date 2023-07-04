// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'; 
import {
  
  // Switch,
  Route,
  // Link,
  BrowserRouter,
  Routes
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#343a40"
      document.body.style.color = "white"
      // document.title  = "TextUtilities-Dark"
      // // setInterval(() => {
      // //   document.title  = "TextUtilities-Light"
      // // },1500)
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = "#343a40"
      // document.title  = "TextUtilities-Light"
      // // setInterval(() => {
      // //   document.title  = "TextUtilities-Dark"
      // // },1500)
    }
  }

  return (
   <div>
    <BrowserRouter>
   <Navbar title="TextUtilities" aboutTextUtils = "About Us" mode={mode} toggleMode={toggleMode}/>
   <div className="container my-3">
   <Routes>
      <Route exact path="/about" element={<About mode={mode} />}></Route>
      <Route exact path="/" element={<TextForm heading = "Enter your text to analyze" mode={mode}/>}></Route>
          
          
        </Routes>
   </div>
   </BrowserRouter>
   </div>
  );
}


export default App;
