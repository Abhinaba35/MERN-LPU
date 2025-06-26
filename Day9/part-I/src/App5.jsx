import React, { useState } from 'react'

const App5 = () => {

     const [searchText ,setSearchText] = useState(() => {
        const val = localStorage.getItem("searchText");

        if (val) {
          return val;
        } else {
          return 'Name';
        }
     });
     console.log(searchText);
    
      const handleSearch = (e) =>{
        //console.log(e);
        const val = e.target.value
        localStorage.setItem("searchText",val )
        setSearchText(e.target.value);

      }
    
    
      return (
        <div>
          <input type="text" value={ searchText} onChange={handleSearch} />
          <h2>{searchText}</h2>
        </div>
      );
    };

export default App5;