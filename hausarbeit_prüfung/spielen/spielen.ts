
namespace Memeory {

    export interface Einzelkarte {

        bezeichnung: string;
        source: string;

    }

    let url: string = "http://yonysgisserver.herokuapp.com/";

    let paerchenCounter: number;


    function warten(_ms: number) {
        return new Promise(resolve => setTimeout(resolve, _ms));
    }


    export async function kartenAnfragen(_anfrage: string): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        url = url + "kartenAnfragen" + "?" + query.toString();

        let antwort: Response = await fetch(url, { method: "get" });
        let antwortString: string = await antwort.text();

        let alleUnterschiedliche: Einzelkarte[] = await JSON.parse(antwortString);

        console.log("das hier muss zweimal kommen");

        let alleKarten: Einzelkarte[] = alleUnterschiedliche.slice();

        for (let counter: number = 0; counter < alleUnterschiedliche.length; counter++) {

            alleKarten.push(alleUnterschiedliche[counter]);
        }

        if (_anfrage == "spielen") {

            paerchenCounter = alleUnterschiedliche.length;
            console.log("hier darf ich auf der adminseite nie sein");
            kartenAnzeigen(alleUnterschiedliche, alleKarten);
        }
        else if (_anfrage == "admin") {

            kartenVorschau(alleUnterschiedliche);
        }

    }
    
    let date: Date;
    async function kartenAnzeigen(_alleUnterschiedliche: Einzelkarte[], _alleKarten: Einzelkarte[]): Promise<void> {

        date = new Date();
        console.log(date.getTime());

        for (let counter: number = 0; counter < _alleUnterschiedliche.length * 2; counter++) {

            let countString: string = counter + "";
            let karte: HTMLImageElement = <HTMLImageElement>document.createElement("img");
            let karteRahmen: HTMLDivElement = <HTMLDivElement>document.createElement("div");
            karteRahmen.setAttribute("class", "karteRahmen");
            karteRahmen.setAttribute("id", countString);

            let random: number = Math.floor(Math.random() * (_alleKarten.length - 1));

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

    let bild1: HTMLImageElement = null;
    let bild2: HTMLImageElement = null;

    async function karteUmdrehen(_click: MouseEvent): Promise<void> {

        let angeklicktesBild: HTMLImageElement = <HTMLImageElement>_click.currentTarget;


        if (bild1 == null) {

            let id: string = angeklicktesBild.getAttribute("id");
            angeklicktesBild.setAttribute("src", id);

            bild1 = angeklicktesBild;

        }
        else {

            if (bild2 == null && angeklicktesBild.parentElement.id != bild1.parentElement.id) {

                let id: string = angeklicktesBild.getAttribute("id");
                angeklicktesBild.setAttribute("src", id);

                bild2 = angeklicktesBild;

                await warten(1000);

                if (bild1.getAttribute("src") == bild2.getAttribute("src") && bild1.parentElement.id != bild2.parentElement.id) {

                    bild1.remove();
                    bild2.remove();
                    paerchenCounter -= 1;
                    console.log(paerchenCounter);

                    if (paerchenCounter == 0) {

                        let dateEnd: Date = new Date();
                        let zeitString: string = ((dateEnd.getTime() - date.getTime()) / 1000) + " Sek";
                        localStorage.setItem("zeit", zeitString);
                        localStorage.setItem("zeitEintragen", "ja");
                        window.location.href = "/hausarbeit_prüfung/scores/scores.html";
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

}
