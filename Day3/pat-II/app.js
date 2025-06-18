const parent = document.getElementById("root");
const title = document.createElement("h1");
title.innerText = "Hello from DOM1";
title.style.textDecoration = "underline";
title.style.textDecorationColor = "Red";

parent.append(title);

const title2 = document.createElement("h1");
title2.innerText = "Hello from DOM2";
parent.append(title2);