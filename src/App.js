// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'; 


function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#343a40"
      document.body.style.color = "white"
    }
    if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = "#343a40"
    }
  }

  return (
   <>
   <Navbar title="TextUtilities" aboutTextUtils = "About Us" mode={mode} toggleMode={toggleMode}/>
   <div className="container my-3">
   <TextForm heading = "Enter your text to analyze" mode={mode}/>  
   {/* <About/> */}
   </div>
  
   </>
  );
}

export default App;
