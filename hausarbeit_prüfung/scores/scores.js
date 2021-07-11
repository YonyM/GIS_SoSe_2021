"use strict";
var Memeory;
(function (Memeory) {
    let url = "https://yonysgisserver.herokuapp.com/";
    async function zeitenAnfragen() {
        url = url + "zeitenAnfragen";
        let antwort = await fetch(url, { method: "get" });
        let antwortString = await antwort.text();
        let alleZeiten = await JSON.parse(antwortString);
        let alleZeitenRichtig = alleZeiten.sort((a, b) => (a.zeit > b.zeit ? 1 : -1));
        zeitenAnzeigen(alleZeitenRichtig);
    }
    async function zeitenAnzeigen(_alleZeiten) {
        let name = document.createElement("th");
        let zeit = document.createElement("th");
        name.appendChild(document.createTextNode("Name"));
        zeit.appendChild(document.createTextNode("Zeit"));
        document.getElementById("scores").appendChild(name);
        document.getElementById("scores").appendChild(zeit);
        for (let counter = 0; counter < _alleZeiten.length; counter++) {
            let zeile = document.createElement("tr");
            document.getElementById("scores").appendChild(zeile);
            let spalteName = document.createElement("td");
            zeile.appendChild(spalteName);
            spalteName.appendChild(document.createTextNode(_alleZeiten[counter].name));
            let spalteZeit = document.createElement("td");
            zeile.appendChild(spalteZeit);
            spalteZeit.appendChild(document.createTextNode(_alleZeiten[counter].zeit));
        }
    }
    async function nameEintragen() {
        let eintragenRahmen = document.createElement("form");
        let deinName = document.createElement("label");
        let deinNameInput = document.createElement("input");
        let deineZeit = document.createElement("label");
        let deineZeitInput = document.createElement("input");
        deinName.appendChild(document.createTextNode("Dein Name: "));
        deineZeit.appendChild(document.createTextNode("Deine  Zeit: "));
        document.body.appendChild(eintragenRahmen);
        deineZeitInput.value = localStorage.getItem("zeit");
        deineZeitInput.readOnly = true;
        deineZeitInput.name = "zeit";
        eintragenRahmen.appendChild(deineZeit);
        eintragenRahmen.appendChild(deineZeitInput);
        deinNameInput.name = "name";
        eintragenRahmen.appendChild(deinName);
        eintragenRahmen.appendChild(deinNameInput);
        let eintragen = document.createElement("button");
        eintragen.setAttribute("id", "eintragen");
        eintragen.name = "zeitEintragen";
        eintragen.textContent = "Zeit eintragen";
        eintragen.addEventListener("click", zeitEintragenDB);
        eintragenRahmen.appendChild(eintragen);
    }
    async function zeitEintragenDB() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = url + "zeitEintragen" + "?" + query.toString();
        await fetch(url);
    }
    if (localStorage.getItem("zeitEintragen") == "ja") {
        nameEintragen();
        localStorage.clear();
    }
    else {
        zeitenAnfragen();
    }
})(Memeory || (Memeory = {}));
//# sourceMappingURL=scores.js.map