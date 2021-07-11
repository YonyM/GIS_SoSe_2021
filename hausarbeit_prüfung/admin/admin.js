"use strict";
var Memeory;
(function (Memeory) {
    if (document.getElementById("anzeigen").className == "adminAnzeige") {
        let button = document.getElementById("hinzufuegen");
        button.addEventListener("click", karteHinzufuegen);
        Memeory.kartenAnfragen("admin");
    }
    function kartenVorschau(_alleVerschiedene) {
        console.log(_alleVerschiedene);
        for (let counter = 0; counter < _alleVerschiedene.length; counter++) {
            //let countString: string = counter + "";
            let adminKarte = document.createElement("img");
            let adminKarteRahmen = document.createElement("div");
            let loeschen = document.createElement("img");
            adminKarte.setAttribute("src", _alleVerschiedene[counter].source);
            adminKarte.setAttribute("class", "karte");
            adminKarteRahmen.setAttribute("class", "adminKarteRahmen");
            loeschen.setAttribute("src", "../testDatein/loeschen.png");
            loeschen.setAttribute("class", "loeschen");
            loeschen.setAttribute("id", _alleVerschiedene[counter].bezeichnung);
            loeschen.addEventListener("click", karteLoeschen);
            adminKarteRahmen.appendChild(loeschen);
            adminKarteRahmen.appendChild(adminKarte);
            document.getElementById("anzeigen").appendChild(adminKarteRahmen);
        }
    }
    Memeory.kartenVorschau = kartenVorschau;
    async function karteLoeschen(_click) {
        let url = "https://yonysgisserver.herokuapp.com/";
        let karteLoeschen = _click.currentTarget;
        url = url + karteLoeschen.id + "?";
        location.reload();
        await fetch(url);
    }
    async function karteHinzufuegen() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://yonysgisserver.herokuapp.com/" + "karteHinzufuegen" + "?" + query.toString();
        location.reload();
        await fetch(url);
    }
})(Memeory || (Memeory = {}));
//# sourceMappingURL=admin.js.map