"use strict";
var Memeory;
(function (Memeory) {
    let url = "https://yonysgisserver.herokuapp.com/";
    //let url: string = "https://yonyszweiterserver.herokuapp.com/";
    //let url: string = "http://localhost:8101/";
    let paerchenCounter;
    function warten(_ms) {
        return new Promise(resolve => setTimeout(resolve, _ms));
    }
    async function kartenAnfragen(_anfrage) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = url + "kartenAnfragen";
        console.log(url);
        let antwort = await fetch(url, { method: "get" });
        let antwortString = await antwort.text();
        let alleUnterschiedliche = await JSON.parse(antwortString);
        console.log("das hier muss zweimal kommen");
        let alleKarten = alleUnterschiedliche.slice();
        for (let counter = 0; counter < alleUnterschiedliche.length; counter++) {
            alleKarten.push(alleUnterschiedliche[counter]);
        }
        if (_anfrage == "spielen") {
            paerchenCounter = alleUnterschiedliche.length;
            console.log("hier darf ich auf der adminseite nie sein");
            kartenAnzeigen(alleUnterschiedliche, alleKarten);
        }
        else if (_anfrage == "admin") {
            Memeory.kartenVorschau(alleUnterschiedliche);
        }
    }
    Memeory.kartenAnfragen = kartenAnfragen;
    let date;
    async function kartenAnzeigen(_alleUnterschiedliche, _alleKarten) {
        date = new Date();
        console.log(date.getTime());
        for (let counter = 0; counter < _alleUnterschiedliche.length * 2; counter++) {
            let countString = counter + "";
            let karte = document.createElement("img");
            let karteRahmen = document.createElement("div");
            karteRahmen.setAttribute("class", "karteRahmen");
            karteRahmen.setAttribute("id", countString);
            let random = Math.floor(Math.random() * (_alleKarten.length - 1));
            karte.setAttribute("src", "../testDatein/rueckseite.png ");
            karte.setAttribute("class", "karten");
            karte.setAttribute("id", _alleKarten[random].source);
            karte.addEventListener("click", karteUmdrehen);
            karteRahmen.appendChild(karte);
            document.getElementById("anzeigen").appendChild(karteRahmen);
            _alleKarten.splice(random, 1);
            await warten(200);
        }
    }
    if (document.getElementById("anzeigen").className == "spielfeld") {
        console.log("ja sie hat childnodes");
        kartenAnfragen("spielen");
    }
    let bild1 = null;
    let bild2 = null;
    async function karteUmdrehen(_click) {
        let angeklicktesBild = _click.currentTarget;
        if (bild1 == null) {
            let id = angeklicktesBild.getAttribute("id");
            angeklicktesBild.setAttribute("src", id);
            bild1 = angeklicktesBild;
        }
        else {
            if (bild2 == null && angeklicktesBild.parentElement.id != bild1.parentElement.id) {
                let id = angeklicktesBild.getAttribute("id");
                angeklicktesBild.setAttribute("src", id);
                bild2 = angeklicktesBild;
                await warten(1000);
                if (bild1.getAttribute("src") == bild2.getAttribute("src") && bild1.parentElement.id != bild2.parentElement.id) {
                    bild1.remove();
                    bild2.remove();
                    paerchenCounter -= 1;
                    console.log(paerchenCounter);
                    if (paerchenCounter == 0) {
                        let dateEnd = new Date();
                        let zeitString = ((dateEnd.getTime() - date.getTime()) / 1000) + " Sek";
                        localStorage.setItem("zeit", zeitString);
                        localStorage.setItem("zeitEintragen", "ja");
                        window.location.replace("../scores/scores.html");
                    }
                }
                else {
                    bild1.setAttribute("src", "../testDatein/rueckseite.png");
                    bild2.setAttribute("src", "../testDatein/rueckseite.png");
                }
                bild1 = null;
                bild2 = null;
            }
        }
    }
})(Memeory || (Memeory = {}));
//# sourceMappingURL=spielen.js.map