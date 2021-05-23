namespace Klappbuch {


    interface Teilbild {

        position: string;
        bildPfad: string;

    }
    

    export interface Kategorie {

        name: string;
        optionen: Teilbild[];

    }

    export interface Auswahl {
        
        BildpfadOben: string;
        BildpfadMitte: string;
        BildpfadUnten: string;

    }

    let alleKategorien: Kategorie[]

    async function ausJsonLesen(_url: RequestInfo): Promise<void> {

        let response: Response = await fetch(_url);
        alleKategorien = await response.json();

        ersteKategorie(alleKategorien);

    }
    
    ausJsonLesen("http://yonym.github.io/GIS_SoSe_2021/aufgabe_2.5/data.json");

    function ersteKategorie(kategorien: Kategorie[]): void {

        let ueberschrift: HTMLElement = document.createElement("h2");
        ueberschrift.setAttribute("id", "ueberschrift");
        ueberschrift.appendChild(document.createTextNode("Bitte wähle ein Teil für oben aus"));
        document.body.appendChild(ueberschrift);
        let kategorieDiv: HTMLDivElement = document.createElement("div");
        kategorieDiv.setAttribute("id", "div");
        document.body.appendChild(kategorieDiv);
        console.log(kategorien[0]);
        for (let i: number = 0; i < kategorien[0].optionen.length; i++) {
            
            TeilbildLaden(kategorien[0].optionen[i], kategorieDiv);

        }

    }
    
    let auswahl: Auswahl = {BildpfadOben: "", BildpfadMitte: "", BildpfadUnten: ""};


    //ich weiß, dass diese Funktion nicht besonders schön ist, aber ich hab sie einfach nicht anders hinbekommen...
    function auswahlSpeichern(_klick: MouseEvent): void {
                
        for (let i: number = 0; i < alleKategorien.length; i++) {
            for (let j: number = 0; j < alleKategorien[i].optionen.length; j++) {

                let ausgewählt: HTMLImageElement = <HTMLImageElement>_klick.currentTarget;
                
                if (alleKategorien[i].optionen[j].bildPfad == ausgewählt.getAttribute("src") && alleKategorien[i].optionen[j].position == "Oben") {
                    
                    auswahl.BildpfadOben = alleKategorien[i].optionen[j].bildPfad;
        
                    console.log(auswahl);
                    
                }
                if (alleKategorien[i].optionen[j].bildPfad == ausgewählt.getAttribute("src") && alleKategorien[i].optionen[j].position == "Mitte") {

                    auswahl.BildpfadMitte = alleKategorien[i].optionen[j].bildPfad;
        
                    console.log(auswahl);
                }
                if (alleKategorien[i].optionen[j].bildPfad == ausgewählt.getAttribute("src") && alleKategorien[i].optionen[j].position == "Unten") {

                    auswahl.BildpfadUnten = alleKategorien[i].optionen[j].bildPfad;
        
                    console.log(auswahl);
                }
            }
        }
    }


    function TeilbildLaden(teilbild: Teilbild, kategorieDiv: HTMLDivElement): void {

        let bild: HTMLImageElement = document.createElement("img");
        bild.src = teilbild.bildPfad;
        bild.setAttribute("class", "bilder");
        kategorieDiv.appendChild(bild);
        bild.addEventListener("click", auswahlSpeichern);
        if (teilbild.position == "Oben") {

            bild.addEventListener("click", function (): void { nächsteKategorie(1); });
        }
        if (teilbild.position == "Mitte") {

            bild.addEventListener("click", function (): void { nächsteKategorie(2); });
        }
        if (teilbild.position == "Unten") {

            bild.addEventListener("click", abInDenStorage);
        }
    }


    function nächsteKategorie(stelle: number): void {

        let wo: string;
        let ueberschrift: HTMLElement = document.createElement("h2");
        ueberschrift.setAttribute("id", "ueberschrift");
        if (stelle == 1) {
            wo = " die mitte";
        }
        if (stelle == 2) {
            wo = "unten";
        }
        document.body.removeChild(document.getElementById("ueberschrift"));
        ueberschrift.appendChild(document.createTextNode("Bitte wähle ein Teil für " + wo + " aus"));
        document.body.appendChild(ueberschrift);
        document.body.removeChild(document.getElementById("div"));
        let kategorieDiv: HTMLDivElement = document.createElement("div");
        kategorieDiv.setAttribute("id", "div");
        document.body.appendChild(kategorieDiv);
        let anzeige: HTMLDivElement = document.createElement("div");
        anzeige.setAttribute("id", "anzeige");
        kategorieDiv.appendChild(anzeige);
        let textAuswahl: HTMLElement = anzeige.appendChild(document.createElement("h2"));
        textAuswahl.appendChild(document.createTextNode("Auswahl:"));


        let wahlOben: HTMLImageElement = document.createElement("img");
        anzeige.appendChild(wahlOben);
        wahlOben.src = auswahl.BildpfadOben;
        wahlOben.setAttribute("class", "anzeige");

        if (stelle == 2) {

            let wahlMitte: HTMLImageElement = document.createElement("img");
            anzeige.appendChild(wahlMitte);
            wahlMitte.src = auswahl.BildpfadMitte;
            wahlMitte.setAttribute("class", "anzeige");
        }

        for (let i: number = 0; i < alleKategorien[stelle].optionen.length; i++) {

            TeilbildLaden(alleKategorien[stelle].optionen[i], kategorieDiv);

        }


    }


    function abInDenStorage(): void {

        sessionStorage.setItem("oben", auswahl.BildpfadOben);
        sessionStorage.setItem("mitte", auswahl.BildpfadMitte);
        sessionStorage.setItem("unten", auswahl.BildpfadUnten);
        window.open("gesamtbild.html");
    }


}