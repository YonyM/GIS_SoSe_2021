
namespace Memeory {

    export interface Einzelkarte {

        bezeichnung: string;
        source: string;

    }

    let url: string = "https://yonysgisserver.herokuapp.com/";

    let paerchenCounter: number;


    function warten(_ms: number) {

        return new Promise(resolve => setTimeout(resolve, _ms));
    }


    //  Karten werden vom vom Server angefragt (Server fragt DB an)  //
    export async function kartenAnfragen(_anfrage: string): Promise<void> {

        url = url + "kartenAnfragen";

        let antwort: Response = await fetch(url, { method: "get" });
        let antwortString: string = await antwort.text();

        let alleUnterschiedliche: Einzelkarte[] = await JSON.parse(antwortString);

        let alleKarten: Einzelkarte[] = alleUnterschiedliche.slice();

        for (let counter: number = 0; counter < alleUnterschiedliche.length; counter++) {

            alleKarten.push(alleUnterschiedliche[counter]);
        }

        //  Hier wird das Array mit allen bzw. allen unterschiedlichen Karten jeh nach Situation weitergegeben  //
        if (_anfrage == "spielen") {

            paerchenCounter = alleUnterschiedliche.length;

            kartenAnzeigen(alleUnterschiedliche, alleKarten);
        }

        else if (_anfrage == "admin") {

            kartenVorschau(alleUnterschiedliche);
        }

    }
    
    let date: Date;

    //  Alle Karten werden "umgedreht" angezeigt  //
    async function kartenAnzeigen(_alleUnterschiedliche: Einzelkarte[], _alleKarten: Einzelkarte[]): Promise<void> {

        date = new Date();

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

    // wenn wir uns "auf dem Spielfeld" befinden wird die Methode karten Anfragen mit spielen gestartet  //
    if (document.getElementById("anzeigen").className == "spielfeld") {

        kartenAnfragen("spielen");
    }

    let bild1: HTMLImageElement = null;
    let bild2: HTMLImageElement = null;

    // Angeklicktes Bild wird angezeigt  //
    async function karteUmdrehen(_click: MouseEvent): Promise<void> {

        let angeklicktesBild: HTMLImageElement = <HTMLImageElement>_click.currentTarget;

        //  Test ob schon eine Karte offen liegt  //
        if (bild1 == null) {

            let id: string = angeklicktesBild.getAttribute("id");
            angeklicktesBild.setAttribute("src", id);

            bild1 = angeklicktesBild;

        }

        else {

            // Test ob schon eine zweite Karte aufgedeckt wurde (und ob die gleiche Karte nochmal geklickt wurde) //
            if (bild2 == null && angeklicktesBild.parentElement.id != bild1.parentElement.id) {

                let id: string = angeklicktesBild.getAttribute("id");
                angeklicktesBild.setAttribute("src", id);

                bild2 = angeklicktesBild;

                await warten(1000);

                if (bild1.getAttribute("src") == bild2.getAttribute("src") && bild1.parentElement.id != bild2.parentElement.id) {

                    bild1.remove();
                    bild2.remove();
                    paerchenCounter -= 1;

                    if (paerchenCounter == 0) {

                        let dateEnd: Date = new Date();
                        let zeitString: string = ((dateEnd.getTime() - date.getTime()) / 1000) + " Sek";
                        localStorage.setItem("zeit", zeitString);
                        localStorage.setItem("zeitEintragen", "ja");
                        window.open("/GIS_SoSe_2021/hausarbeit_prüfung/scores/scores.html");
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
