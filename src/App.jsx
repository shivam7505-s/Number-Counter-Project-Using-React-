import { useState, } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter,setCounter] = useState(0)
  const addValue = () =>{
    if(Counter === 20 ){
      alert("counter value is eqal to 20:")
       return(
        // Counter = 20 
        setCounter(20)
       )
    }
    // console.log("added",Counter);
    Counter = Counter + 1
    setCounter(Counter)
    
  }
    const removeValue = () => {
      if(Counter===0){
        alert("counter value is alread zero")
        return(
          setCounter(0)
        )
      }
      Counter = Counter - 1
      setCounter(Counter)
    }
  return (
    <>
         <h1>Number Counter Project </h1>
         <h2> Counter value : {Counter}</h2>
         <button 
         onClick={addValue}
         >Add value </button>
         <br />
         <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
