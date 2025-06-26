import React, { useState } from 'react'

const App1 = () => {
  let SearchText = "Arun";

 const [monitor , remote] = useState(0);
 console.log(monitor);

  const handleClick = (e) =>{
    remote(monitor+1);
    console.log(monitor)
  }


  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <h2>{monitor}</h2>
    </div>
  );
};

export default App1;