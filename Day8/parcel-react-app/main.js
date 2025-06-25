import React from "react";
import ReactDOM from "react-dom/client";

const domRoot = document.getElementById("root");
//console.log(domRoot);
const  reactRoot = ReactDOM.createRoot(domRoot);
//console.log(reactRoot);

const App = () =>{
    console.log("Abhinaba");
    return(
        <div>
            <h1>Hello from React App</h1>
        </div>
    )
}

reactRoot.render(<App />);