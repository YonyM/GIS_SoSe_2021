

let abschickenButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("abschicken");
abschickenButton.addEventListener("click", datenAbschicken);

let anzeigenButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("anzeigen");
anzeigenButton.addEventListener("click", datenAnzeigen);

let url: string = "http://localhost:8101";
//let url: string = "https://yonysgisserver.herokuapp.com";


async function datenAbschicken(): Promise<void> {

    console.log("Daten werden abgeschickt!...");
    let formData: FormData = new FormData(document.forms[0]);

    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "/datenAbschicken" + "?" + query.toString();

    await fetch(url);
}


async function datenAnzeigen(): Promise <void> {

    url = url + "/datenAnzeigen" + "?" + MediaQueryList.toString();

    let antwort: Response = await fetch(url, {method: "get"});
    let antwortText: string = await antwort.text();
    let anzeigeDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("anzeigeDiv");
    anzeigeDiv.appendChild(document.createTextNode(antwortText));

}