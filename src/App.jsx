import { useState } from 'react'
import './App.css'

function App() {
  const[height,setHeight]=useState("");
  const[weight,setWeight]=useState("");
  const[bmi,setBmi]=useState(null);
  const[bmiStatus,setBmiStatus]=useState("");
  const[errorMessage,setErrorMessage]=useState("");

  const calculateBMI =()=>{
    const ValidHeight=/^\d+$/.test(height);
    const ValidWeight=/^\d+$/.test(weight);

    if(ValidHeight && ValidWeight){
      const heightInMetres=height/100;
      const BMI=weight/(heightInMetres*heightInMetres);
      setBmi(BMI.toFixed(2));
      if(BMI<18.5){
        setBmiStatus("UnderWeight");
      }
      else if(BMI>=18.5 && BMI<24.9){
        setBmiStatus("Normal Weight");
      }
      else if(BMI>=25 && BMI<29.9){
        setBmiStatus("Over Weight");
      }
      else{
        setBmiStatus("Obese");
      }
      setErrorMessage("");
    }
    else{
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("Please enter Valid numeric value for height and weight.")
    }
  }

  const clear=()=>{
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
  }


  return (
    <>
      <div className='BMI_Calculator'>
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
          <div className="input-container">
            <label htmlFor="height">Height (Cm):</label>
            <input type="text" placeholder='Enter Height' value={height} onChange={(e)=>setHeight(e.target.value)}  />
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight (Kg):</label>
            <input type="text" placeholder='Enter Weight' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
          </div>
        <button onClick={calculateBMI}>Calculate BMI</button>
        <button onClick={clear}>Clear</button>
        {bmi!==null && (
        <div className='result'>
          <p>Your BMI is : {bmi}</p>
          <p>BMI Status : {bmiStatus}</p>
        </div>
      )}
        </div>
      </div>
    </>
  )
}

export default App
