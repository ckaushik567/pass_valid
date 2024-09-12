import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValues,setInputValue] = useState("");
  const [message , setMessage] = useState("");

  function checkUpperCase(str){
    return str!==str.toLowerCase()
  }

   function checkValid(e){
    setInputValue(e.target.value);
     if(!inputValues.includes("@")){
      setMessage('Your Password is not Strong');
     }
    else if(!checkUpperCase(inputValues)){
      setMessage('Your Password is not Strong');
    }
    else if(!/[0-9]/.test(inputValues)){
      setMessage('Your Password is not Strong');
    }
    else{
      setMessage("")
    }
   }
  return (
     <div className="container">
      <div className="main-container">
        <h2>Checking password strenth in Reactjs</h2>
        <div className='inputbox'>
        <label htmlFor="">Enter Your Password</label>
        <input type="text" onChange={(e)=>checkValid(e)} value={inputValues} />
        </div>
        <h1>{message}</h1>
      </div>
     </div>
  )
}

export default App
