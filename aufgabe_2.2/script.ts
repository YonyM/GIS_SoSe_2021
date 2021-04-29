// Es ist alles auskommentiert, damit nicht mehere Ausgaben zur Verwirrung führen...

// Aufgabe 1:
// a)
/* min(4, 2, 3, 5, 4, 3, 2);
function min(...werte: number[]): void {
    let kleinste: number = werte[0];
    for (let zähler = 0; zähler < werte.length; zähler++) {
        if ( werte[zähler] < kleinste) {
            kleinste = werte[zähler];
        }
    }
    console.log(kleinste);
} */

// b) 
// Bei -1 trifft keine der Bedingungen der ersten Schleife zu, weshalb
// sich dich Funktion immer wieder aufruft und die Zahl nie 1 oder 0 sein wird.
// Dabei kommt es zu einem Stack Overflow.
/* isEven(-2);
function isEven(x: number) {
    let ausgabe = true;
    //Die erste if-Schleife ist für die negativen Zahlen zuständig.
     if (x < 0) {
        x = x * (-1);
    }  
    if (x == 0 || x == 1) {
        if (x == 0) {
            ausgabe = true;
        }
        else {
            ausgabe = false;
        }
        console.log(ausgabe);
    }
    else {
        isEven(x - 2);
    }  
} */

// c)
/* class Studi {
    vorname: string;
    nachname: string;
    matrikelnr: number;
    studiengang: string;

    constructor(vorname: string, nachname: string, matrikelnr: number, studiengang: string) {
        this.vorname = vorname;
        this.nachname = nachname;
        this.matrikelnr = matrikelnr;
        this.studiengang = studiengang;
    }
}
const st1 = new Studi("Yony", "Martens", 123456, "MIB");
const st2 = new Studi("Nils", "Bergmann", 654321, "MIB");
const st3 = new Studi("Fabian", "Mitbewohner", 162534, "SSB");
let studiliste: Studi[] = [st1, st2, st3];
studiliste.push(new Studi("Max", "Mustermann", 111111, "OMB"));
console.log(studiliste[3].nachname);

function showInfo(studi: Studi) {
        console.log(studi.vorname, studi.nachname, studi.matrikelnr, studi.studiengang);
}
showInfo(studiliste[0]);
showInfo(studiliste[1]);
showInfo(studiliste[2]);
showInfo(studiliste[3]); */

//Aufgabe 2
//a)
/* function backwards(array: number[]) {
    let umgedreht: number[] = [];
    let stelle: number = 0;
    for (let zähler = array.length - 1; zähler >= 0; zähler--) {
        umgedreht[stelle] = array[zähler];
        //array[zähler] = umgedreht[stelle];
        stelle++;
    }
    console.log(umgedreht);
}
let testarray: number[] = [1, 2, 3, 4, 5];
backwards(testarray); */

// b)
/* let array1: number[] = [1, 2, 3, 4, 5];
let array2: number[] = [5, 4, 3, 2, 1];
function join(array1: number[], array2: number[]) {
    let zusammen: number[] = array1;
    for (let i: number = 0; i < array2.length; i++) {
        zusammen.push(array2[i]);
    }  
    console.log(zusammen);
}
join(array1, array2); */

// c)
/* let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function split(array: number[], x: number, y: number) {
    let teilarray: number[] = [];
    // Hier müsste geprüft werden, ob x und y im Bereich der exisitierenden Arraystellen liegen. 
    for (let zähler: number = x; zähler < y; zähler++) {
        teilarray.push(array[zähler]);
    }
    console.log(teilarray);
}
split(array, 2, 9); */

//Aufgabe 3
// a)
let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");
let path1: Path2D = new Path2D();
/*
context.lineWidth = 10;
context.strokeStyle = "green";
context.beginPath();
context.lineTo(0, 790);
context.lineTo(940, 790);
context.closePath();
context.stroke();

context.strokeStyle = "lightblue";
context.lineWidth = 20;
context.beginPath();
context.moveTo(0, 20);
context.lineTo(940, 20);
context.closePath();
context.stroke();



context.fillRect(20, 585, 200, 200);
context.fillStyle = "white";
context.fillRect(40, 670, 60, 115);
context.fillRect(130, 650, 60, 60);

context.fillStyle = "brown";
context.fillRect(600, 650, 40, 135);

context.lineWidth = 100;
context.strokeStyle = "green";
context.beginPath();
context.arc(620, 527, 100, 70, 100);
context.closePath();
context.stroke();

context.lineWidth = 10;
context.strokeStyle = "black";
context.beginPath();
context.moveTo(10, 595);
context.lineTo(120, 450);
context.lineTo(230, 595);
context.closePath();
context.stroke();

context.lineWidth = 5;
context.fillStyle = "lightblue";
context.strokeStyle = "lightblue";
context.beginPath();
context.arc(100, 100, 30, 70, 100);
context.closePath();
context.stroke();

context.lineWidth = 5;
context.fillStyle = "lightblue";
context.strokeStyle = "lightblue";
context.beginPath();
context.arc(165, 100, 40, 70, 100);
context.closePath();
context.stroke();

context.lineWidth = 5;
context.fillStyle = "lightblue";
context.strokeStyle = "lightblue";
context.beginPath();
context.arc(120, 80, 30, 70, 100);
context.closePath();
context.stroke();

context.lineWidth = 5;
context.fillStyle = "lightblue";
context.strokeStyle = "lightblue";
context.beginPath();
context.arc(120, 125, 20, 70, 100);
context.closePath();
context.stroke();



context.lineWidth = 5;
context.fillStyle = "lightblue";
context.strokeStyle = "lightblue";
context.beginPath();
context.arc(620, 115, 20, 70, 100);
context.closePath();
context.stroke();

context.lineWidth = 5;
context.fillStyle = "lightblue";
context.strokeStyle = "lightblue";
context.beginPath();
context.arc(600, 145, 30, 70, 100);
context.closePath();
context.stroke();

context.lineWidth = 5;
context.fillStyle = "lightblue";
context.strokeStyle = "lightblue";
context.beginPath();
context.arc(670, 155, 60, 70, 100);
context.closePath();
context.stroke(); */
// b)
class Rechteck {
    x: number;
    y: number;
    breite: number;
    höhe: number;

    // c)
    constructor() {
        this.x = Math.random() * 300;
        this.y = Math.random() * 300;
        this.breite = Math.random() * 300;
        this.höhe = Math.random() * 300; 
    }
}
// d)
function drawRect(x: number, y: number, breite: number, höhe: number) {
    context.fillRect(x, y, breite, höhe); 
}

// e)
function generateRects(menge: number) {
    let array: Rechteck[] = [];
    for (let zähler: number = 0; zähler < menge; zähler++) {
        array.push(new Rechteck);
    }
    for (let stelle: number = 0; stelle < array.length; stelle++) {
        drawRect(array[stelle].x, array[stelle].y, array[stelle].breite, array[stelle].höhe);
    }
}

generateRects(5);








