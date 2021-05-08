namespace Klappbuch {


    class Teilbild {

        position: string;
        bildPfad: string;

    }




    export class Kategorie {

        name: string;

        option1: Teilbild;
        option2: Teilbild;
        option3: Teilbild;

    }


    interface Auswahl {
        
        auswahlOben?: Teilbild;
        auswahlMitte?: Teilbild;
        auswahlUnten?: Teilbild;
    }


    let a1: Auswahl = {auswahlOben: new Teilbild, auswahlMitte: new Teilbild, auswahlUnten: new Teilbild};
    bilderLaden(daten[0].option1, daten[0].option1.position);
    bilderLaden(daten[0].option2, daten[0].option2.position);
    bilderLaden(daten[0].option3, daten[0].option3.position);


    function bilderLaden(teilbild: Teilbild, position: string): void {

        let bild: HTMLImageElement = document.createElement("img");
        bild.classList.add(position);

        bild.src = teilbild.bildPfad;
        document.body.appendChild(bild);
        bild.addEventListener("click", obenSpeichern);

    }

    function obenSpeichern(klick: MouseEvent): void {

        let ausgewählt: HTMLImageElement = <HTMLImageElement> klick.currentTarget;
        
        a1.auswahlOben.bildPfad = ausgewählt.src;
        a1.auswahlOben.position = "Oben";

        console.log(a1.auswahlOben);
        

    }
    
    



    
    


}