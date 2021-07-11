
namespace Memeory {

    interface Zeiten {

        name: string;
        zeit: string;
    }

    let url: string = "https://yonysgisserver.herokuapp.com/"; 

    async function zeitenAnfragen(): Promise<void> {

        url = url + "zeitenAnfragen";

        let antwort: Response = await fetch(url, { method: "get" });
        let antwortString: string = await antwort.text();

        let alleZeiten: Zeiten[] = await JSON.parse(antwortString);

        let alleZeitenRichtig: Zeiten[] = alleZeiten.sort((a, b) => (a.zeit > b.zeit ? 1 : -1));

        zeitenAnzeigen(alleZeitenRichtig);

    }

    
    async function zeitenAnzeigen(_alleZeiten: Zeiten[]): Promise<void> {


        let name: HTMLTableHeaderCellElement = <HTMLTableHeaderCellElement>document.createElement("th");
        let zeit: HTMLTableHeaderCellElement = <HTMLTableHeaderCellElement>document.createElement("th");
        name.appendChild(document.createTextNode("Name")); 
        zeit.appendChild(document.createTextNode("Zeit"));
        document.getElementById("scores").appendChild(name);
        document.getElementById("scores").appendChild(zeit);
        
        for (let counter: number = 0; counter < _alleZeiten.length; counter++) {

            let zeile: HTMLTableRowElement = <HTMLTableRowElement>document.createElement("tr");
            document.getElementById("scores").appendChild(zeile);

            let spalteName: HTMLTableDataCellElement = <HTMLTableDataCellElement>document.createElement("td");
            zeile.appendChild(spalteName);
            spalteName.appendChild(document.createTextNode(_alleZeiten[counter].name));

            let spalteZeit: HTMLTableDataCellElement = <HTMLTableDataCellElement>document.createElement("td");
            zeile.appendChild(spalteZeit);
            spalteZeit.appendChild(document.createTextNode(_alleZeiten[counter].zeit));
            
        }
    }

    async function nameEintragen(): Promise<void> {

        let eintragenRahmen: HTMLFormElement = <HTMLFormElement>document.createElement("form");
        let deinName: HTMLLabelElement = <HTMLLabelElement>document.createElement("label");
        let deinNameInput: HTMLInputElement = <HTMLInputElement>document.createElement("input");
        let deineZeit: HTMLLabelElement = <HTMLLabelElement>document.createElement("label");
        let deineZeitInput: HTMLInputElement = <HTMLInputElement>document.createElement("input");
        
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

        let eintragen: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
        eintragen.setAttribute("id", "eintragen");
        eintragen.name = "zeitEintragen";
        eintragen.textContent = "Zeit eintragen";
        eintragen.addEventListener("click", zeitEintragenDB);
        eintragenRahmen.appendChild(eintragen);
    }

    async function zeitEintragenDB(): Promise<void> {
       
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);

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
}