"use strict";
var Klappbuch;
(function (Klappbuch) {
    let gespeichert = { BildpfadOben: sessionStorage.getItem("oben"),
        BildpfadMitte: sessionStorage.getItem("mitte"), BildpfadUnten: sessionStorage.getItem("unten") };
    async function verschicken(_url, gespeichert) {
        let query = new URLSearchParams(gespeichert);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let rueckmeldung = await response.text();
        let antwortDiv = document.createElement("h2");
        antwortDiv.appendChild(document.createTextNode(rueckmeldung));
        document.body.appendChild(antwortDiv);
    }
    verschicken("https://gis-communication.herokuapp.com", gespeichert);
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
})(Klappbuch || (Klappbuch = {}));
//# sourceMappingURL=gesamtbildScript.js.map