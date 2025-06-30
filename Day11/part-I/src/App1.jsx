import React, { useEffect, useState } from 'react'

const App1 = () => {
/*
  const getData = () => {
    const response = fetch("https://dummyjson.com/users");

    response
      .then((resp) => {
        const pr2 = resp.json();
        return pr2;
      })
      .catch((err) => {
        console.log("error:", err.message);
      })
      .then((data) => {
        console.log("data", data);
      });
  };
*/

const [usersList , setUsersList] = useState([]);
console.log("--START--",usersList);

const getData = async()=> {
  console.log("Inside getData");
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  console.log("data --> " , data);
  const { users } = data;
  setUsersList(users); 
}

console.log("before getData call");
 // getData();
console.log("getData call");

useEffect(()=>{
  getData();
},[]);

//empty depenedency array ==>  it helps function call only once

  return (
    <div>
      <h1>Hello</h1>
      {usersList.map((elem) => {
        return (
          <div>
            <h3>{elem.firstName}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App1;
