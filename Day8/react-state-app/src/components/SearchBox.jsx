import React, { useState } from "react";


//rerender -> re-run the function

//component is rerendered only when the state change or props change

//state variable aree given to use by react
//if the value of state variable change --> state of the component has changed
const SearchBox = () => {
    //let searchText = "Anuj";

  const [monitor , remote] =  useState();
  const handleSearch = (e) => {
    //searchText = e.target.value;
    //console.log(searchText);
    remote(e.target.value);
    console.log(monitor);
  };

  return (
    <div>
      <input type="text" onKeyUp={handleSearch}></input>
      <h3>{monitor}</h3>
    </div>
  );
};

export { SearchBox };
