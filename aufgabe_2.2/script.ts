
namespace aufgabe2_2 {
    // Aufgabe 1:
    // a)
    function min(...werte: number[]): number {
        let kleinste: number = werte[0];
        for (let zähler: number = 0; zähler < werte.length; zähler++) {
            if (werte[zähler] < kleinste) {
                kleinste = werte[zähler];
            }
        }
        return kleinste;
    }
    console.log(min(4, 2, 3, 1, 4, 3, 2));


    // b) 
    // Bei -1 trifft keine der Bedingungen der ersten Schleife zu, weshalb
    // sich dich Funktion immer wieder aufruft und die Zahl nie 1 oder 0 sein wird.
    // Dabei kommt es zu einem Stack Overflow.
    console.log(isEven(8));
    function isEven(x: number): boolean {
        let ausgabe: boolean;
        if (x < 0) {
            x = x * (-1);
        }
        if (x != 1 && x != 0) {
            ausgabe = isEven(x - 2);
        }
        if (x == 1) {
            ausgabe = false;
        }
        if (x == 0) {
            ausgabe = true;
        }
        return ausgabe;
    }

    // c)
    class Studi {
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
    const st1: Studi = new Studi("Yony", "Martens", 123456, "MIB");
    const st2: Studi = new Studi("Nils", "Bergmann", 654321, "MIB");
    const st3: Studi = new Studi("Fabian", "Mitbewohner", 162534, "SSB");

    let studiliste: Studi[] = [st1, st2, st3];

    studiliste.push(new Studi("Max", "Mustermann", 111111, "OMB"));
    console.log(studiliste[3].nachname);

    function showInfo(studi: Studi): void {
        console.log(studi.vorname, studi.nachname, studi.matrikelnr, studi.studiengang);
    }

    showInfo(studiliste[0]);
    showInfo(studiliste[1]);
    showInfo(studiliste[2]);
    showInfo(studiliste[3]);

    //Aufgabe 2
    //a)
    function backwards(array: number[]): number[] {
        let umgedreht: number[] = [];
        let stelle: number = 0;
        for (let zähler: number = array.length - 1; zähler >= 0; zähler--) {
            umgedreht[stelle] = array[zähler];
            stelle++;
        }
        return umgedreht;
    }
    let testarray: number[] = [1, 2, 3, 4, 5];
    console.log(backwards(testarray));


    // b)
    let array1: number[] = [1, 2, 3, 4, 5];
    let array2: number[] = [5, 4, 3, 2, 1];
    function join(array1: number[], array2: number[]): void {
        let zusammen: number[] = [];
        for (let i: number = 0; i < array1.length; i++) {
            zusammen.push(array1[i]);
        }
        for (let j: number = 0; j < array2.length; j++) {
            zusammen.push(array2[j]);
        }
        console.log(zusammen);
    }
    join(array1, array2);

    // c)
    let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    function split(array: number[], x: number, y: number) {
        let teilarray: number[] = [];
        // Hier müsste geprüft werden, ob x und y im Bereich der exisitierenden Arraystellen liegen.
        for (let zähler: number = x; zähler < y; zähler++) {
            teilarray.push(array[zähler]);
        }
        console.log(teilarray);
    }
    split(array, 2, 9);

    //Aufgabe 3
    //a)
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
    let context: CanvasRenderingContext2D = canvas.getContext("2d");

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
    context.stroke();

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
    function drawRect(rect: Rechteck): void {
        context.fillRect(rect.x, rect.y, rect.breite, rect.höhe);
    }

    // e)
    function generateRects(menge: number): void {
        let array: Rechteck[] = [];
        for (let zähler: number = 0; zähler < menge; zähler++) {
            array.push(new Rechteck);
        }
        for (let stelle: number = 0; stelle < array.length; stelle++) {
            drawRect(array[stelle]);
        }
    }

    generateRects(5);

}







