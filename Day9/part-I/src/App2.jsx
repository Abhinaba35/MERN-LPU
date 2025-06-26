import React, { useState } from 'react'

const App2 = () => {
  let SearchText = "Arun";

 const [monitor , remote] = useState(0);
 console.log(monitor);
/*
  const handleClick = (e) =>{
    remote(monitor+1);
    remote(monitor + 2);
    console.log(monitor)
  }

  */
  const handleClick = () => {
    remote(monitor + 1);
    remote(monitor + 2);
    remote(monitor + 1);
    console.log(monitor);
  };


  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <h2>{monitor}</h2>
    </div>
  );
};

export default App2;