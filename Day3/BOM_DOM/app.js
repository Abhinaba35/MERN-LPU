//DOM ----> Document Object Model
//BOM ----> Browser Object Model

//console.log("Window ", window);
//console.log("window.documents" , window.document);

//console.dir(document.children[0].children[1].children[0].innerHTML);

//---------------------------------
/*
//1. Document.getElement_s_BytagName --> [] (iterable)(HTML Collections)

const headings = document.getElementsByTagName("h3");
console.log("Headings " , headings);


const header = document.getElementsByTagName("header");
console.log("Header : " , header);


headings[0].innerText = "Hello Raj";
headings[1].innerText = "Hello Annu";


*/
/*
//2. Document.getElement_s_ByclassName --> [] (iterable)(HTML Collections)

const elements = document.getElementsByClassName("text-brown");
console.log("Elements " , elements);

elements[0].style.color = "brown";

*/

/*
//3. Document.getElement_s_ById --> [] (iterable)(HTML Collections)

const text = document.getElementById("text-1");
text.style.backgroundColor = "lime";

*/

//4. documents.querySelectorAll -> [] (HTML Collections)


const titles = document.querySelectorAll("h3");
const textBrownElements  = document.querySelectorAll(".text-brown");
const textparas = document.querySelectorAll("#text-1");

console.log("titles : ",titles);
console.log("textbrownElements : ", textBrownElements);
console.log("textparas : ", textparas);

//5. document.querySelector --> elements or null
const title = document.querySelector("h3");
const textBrownElement = document.querySelector(".text-brown");
const textpara = document.querySelector("#text-1");

console.log("titles : ", title);
console.log("textbrownElements : ", textBrownElement);
console.log("textparas : ", textpara);