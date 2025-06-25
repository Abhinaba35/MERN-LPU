//console.log("Hello! from Day7");

/*
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

*/

/*
const rootElem = document.getElementById('root');

const item1 = document.createElement('li');
item1.innerText = "Item1";
const item2 = document.createElement("li");
item2.innerText = "Item2";

const list = document.createElement('ul');
list.appendChild(item1);
list.appendChild(item2);

rootElem.appendChild(list);

*/


//-------------------
/*
const item1 = React.createElement("li",{},"Item 1");
console.log("item1: ", item1);
const item2 = React.createElement("li",{},"Item 2");

const list = React.createElement("ul", {}, [item1, item2]);

const rootElem = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootElem);

reactRoot.render(list);

*/

/*
const item1 = <li>Item 1</li>
const item2 = <li>Item 2</li>
const list = (<ul>{item1} {item2}</ul>);

const rootElem = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(rootElem);

reactRoot.render(list);
*/


const list = (
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
);

const rootElem = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(rootElem);

reactRoot.render(list);