
namespace Memeory {


    if (document.getElementById("anzeigen").className == "adminAnzeige") {

        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("hinzufuegen");
        button.addEventListener("click", karteHinzufuegen);
        kartenAnfragen("admin");
    }

    export function kartenVorschau(_alleVerschiedene: Einzelkarte[]): void {

        console.log(_alleVerschiedene);

        for (let counter: number = 0; counter < _alleVerschiedene.length; counter++) {

            let adminKarte: HTMLImageElement = <HTMLImageElement>document.createElement("img");
            let adminKarteRahmen: HTMLDivElement = <HTMLDivElement>document.createElement("div");
            let loeschen: HTMLImageElement = <HTMLImageElement>document.createElement("img");

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


    async function karteLoeschen(_click: MouseEvent): Promise<void> {

        let url: string = "https://yonysgisserver.herokuapp.com/";
        //let url: string = "http://localhost:8101/";

        let karteLoeschen: HTMLImageElement = <HTMLImageElement>_click.currentTarget;


        url = url + karteLoeschen.id + "?";

        location.reload();
        await fetch(url);
    }

    async function karteHinzufuegen(): Promise<void> {

        let url: string = "https://yonysgisserver.herokuapp.com/";
        //let url: string = "http://localhost:8101/";
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        url = url + "karteHinzufuegen" + "?" + query.toString();

        location.reload();
        await fetch(url);
    }

}