import React, { useState } from 'react'

const App = () => {

    //In localStorage only string data type present
 const [monitor , remote] = useState(()=>{
    const val = localStorage.getItem("counter-value");

    if(val){
        return parseInt(val);
    }else{
        return 0;
    }
 });
 console.log(monitor);

  const handleIncrement = () =>{
    remote((prev) =>{ 
       const newValue = prev +1;
       localStorage.setItem("counter-value" , newValue);
       return newValue;
    });
  };

  const handleDecrement = () => {
    remote((prev) => {
      const newValue = prev - 1;
      localStorage.setItem("counter-value", newValue);
      return newValue;
    });
  };


  const handleReset = () => {
    /*
    remote((prev) => {
      const newValue = 0;
      localStorage.setItem("counter-value", newValue);
      return newValue;
    });
    */

    remote(0);
    localStorage.setItem("counter-value",0);
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <h2>{monitor}</h2>
    </div>
  );
};

export default App;