import React, { useState } from "react";

const App = () => {
  /*
  const [name , setName] = useState("");
  const [city, setCity] = useState("");
  const [user, setUser] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(name && city){
      setUser([...user, {name ,city}]);
    }


  }

  const handleName = (e) =>{
    setName (e.target.value);
  }
  const handleCity = (e) =>{
    setCity(e.target.value);
  }

  */

  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userName = e.target.userName.value;
    const city = e.target.city.value;

    setUsers((prev) => {
      const temp = [...prev];
      temp.push({ userName, city });
      return temp;
    });
  };

  const handleDelete = (idx) => {
    setUsers ((prev) =>{
      const temp = [...prev];
      temp.slice(idx,1);
      return temp;
    })
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Username: </h4>
        <input type="text" name="userName" />
        <h4>City: </h4>
        <input type="text" name="city" />
        <button>Add</button>
      </form>

      {users.map((ele, idx) => (
        <div key={idx}>
          <h4>{"Name: " + ele.userName}</h4>
          <p>{"City: " + ele.city}</p>
          <button onClick={() => handleDelete(idx)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;
