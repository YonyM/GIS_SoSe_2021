let button1: HTMLButtonElement = document.createElement("button");
button1.style.width = "100px";
button1.style.height = "30px";
button1.style.paddingBottom = "30px";
button1.style.margin = "20px";
button1.addEventListener("click", neuesRechteck);
document.body.appendChild(button1);

button1.appendChild(document.createTextNode("Noch nen Rechteck"));

let button2: HTMLButtonElement = document.createElement("button");
button2.style.width = "100px";
button2.style.height = "30px";
button2.style.paddingBottom = "30px";
button2.style.margin = "20px";
button2.addEventListener("click", reload);
document.body.appendChild(button2);

button2.appendChild(document.createTextNode("Nochmal von Vorne"));

// Leider habe ich es nicht geschafft mit dem Button für ein neues 
//Rechteck eine Methode innerhalb der Klasse Rechteck anzusteuern,
//weshalb ich leider wieder Funktionen geschrieben habe...

class Rechteck {
    x: number;
    y: number;
    breite: number;
    höhe: number;


    constructor() {
        this.x = Math.random() * 400;
        this.y = Math.random() * 400;
        this.breite = Math.random() * 300;
        this.höhe = Math.random() * 300;
    }  
}
divsErzeugen(4);

function divsErzeugen(menge: number): void {
    let array: Rechteck[] = [];
    for (let zähler: number = 0; zähler < menge; zähler++) {
        array.push(new Rechteck);
     }

    for (let stelle: number = 0; stelle < array.length; stelle++) {
        divsAnzeigen(array[stelle].höhe, array[stelle].breite);
     }
}

function divsAnzeigen(höhe: number, breite: number): void {

    let rechteck: HTMLDivElement = document.createElement("div");
    rechteck.style.height = höhe + "px";
    rechteck.style.width = breite + "px";

    rechteck.style.backgroundColor = "rgb(" +
        Math.random() * 265 + "," + Math.random() * 265 + "," + Math.random() * 265 + ")";
    document.body.appendChild(rechteck);
}


function neuesRechteck(): void {
    divsErzeugen(1);
}


function reload(): void {
    location.reload();
}
