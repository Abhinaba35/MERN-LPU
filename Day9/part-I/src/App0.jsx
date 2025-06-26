import React, { useState } from 'react'

const App0 = () => {
  let SearchText = "Arun";

 const [monitor , remote] = useState();

  const handleSearch = (e) =>{
    const value = e.target.value;
    //SearchText = value;

    remote(value);
    console.log(monitor);
  }


  return (
    <div>
      <input type="text" onKeyUp={handleSearch} />
      <h2>{monitor}</h2>
    </div>
  );
};

export default App0;

