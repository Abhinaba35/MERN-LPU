import React, { useState } from 'react';

const arr = ["Kiwi" , "Banana", "Pineapple"];

const App1 = () => {
  const [editIdex , setEditIndex] = useState(-1);
  return (
    <div>
      {
        arr.map((elem , idx) => {
          return (
            <div style={{background : idx === editIdex ? "red" : "green"}}>
              {idx === editIdex ? <input type="text" /> : <h1>{elem}</h1>}
              <button
                onClick={() => {
                  setEditIndex(idx);
                }}
              >
                Edit
              </button>
            </div>
          );
        })
      }
    </div>
  )
}

export default App1;
