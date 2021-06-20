"use strict";
let abschickenButton = document.getElementById("abschicken");
abschickenButton.addEventListener("click", datenAbschicken);
let anzeigenButton = document.getElementById("anzeigen");
anzeigenButton.addEventListener("click", datenAnzeigen);
let url = "http://localhost:8101";
//let url: string = "https://yonysgisserver.herokuapp.com";
async function datenAbschicken() {
    console.log("Daten werden abgeschickt!...");
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    url = url + "/datenAbschicken" + "?" + query.toString();
    await fetch(url);
}
async function datenAnzeigen() {
    url = url + "/datenAnzeigen" + "?" + MediaQueryList.toString();
    let antwort = await fetch(url, { method: "get" });
    let antwortText = await antwort.text();
    //console.log(antwortText);
    let anzeigeDiv = document.getElementById("anzeigeDiv");
    anzeigeDiv.appendChild(document.createTextNode(antwortText));
}
//# sourceMappingURL=script.js.map