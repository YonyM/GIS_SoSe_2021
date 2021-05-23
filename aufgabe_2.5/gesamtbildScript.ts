namespace Klappbuch {

    let gespeichert: Auswahl = {BildpfadOben: sessionStorage.getItem("oben"),
    BildpfadMitte: sessionStorage.getItem("mitte"), BildpfadUnten: sessionStorage.getItem("unten")};

    async function verschicken(_url: RequestInfo, gespeichert: Auswahl): Promise<void> {

        let query: URLSearchParams = new URLSearchParams(<any>gespeichert);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let rueckmeldung: string = await response.text();

        let antwortDiv: HTMLElement = document.createElement("h2");
        antwortDiv.appendChild(document.createTextNode(rueckmeldung));
        document.body.appendChild(antwortDiv);

    }

    verschicken("https://gis-communication.herokuapp.com", gespeichert);

    let gesamtbildDiv: HTMLDivElement = document.createElement("div");
    document.body.appendChild(gesamtbildDiv);

    let oben: HTMLImageElement = document.createElement("img");
    oben.src = sessionStorage.getItem("oben");
    gesamtbildDiv.appendChild(oben);
    console.log(oben.getAttribute("src"));

    let mitte: HTMLImageElement = document.createElement("img");
    mitte.src = sessionStorage.getItem("mitte");
    gesamtbildDiv.appendChild(mitte);
    console.log(mitte.getAttribute("src"));

    let unten: HTMLImageElement = document.createElement("img");
    unten.src = sessionStorage.getItem("unten");
    gesamtbildDiv.appendChild(unten);
    console.log(unten.getAttribute("src"));

    

}
