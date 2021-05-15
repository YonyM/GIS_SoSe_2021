"use strict";
let gesamtbildDiv = document.createElement("div");
document.body.appendChild(gesamtbildDiv);
let oben = document.createElement("img");
oben.src = sessionStorage.getItem("oben");
gesamtbildDiv.appendChild(oben);
console.log(oben.getAttribute("src"));
let mitte = document.createElement("img");
mitte.src = sessionStorage.getItem("mitte");
gesamtbildDiv.appendChild(mitte);
console.log(mitte.getAttribute("src"));
let unten = document.createElement("img");
unten.src = sessionStorage.getItem("unten");
gesamtbildDiv.appendChild(unten);
console.log(unten.getAttribute("src"));
//# sourceMappingURL=gesamtbildScript.js.map