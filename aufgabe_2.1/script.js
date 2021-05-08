"use strict";
//Aufgabe 1
/*function a1(): void {
   let x: string = "Alles";
   console.log(x);
   func1();
   console.log(x);
   func2();
   console.log(x);
   func3();
}

a1();

function func1(): void {
   console.log("Gute!");
}
function func2(): void {
   console.log("Klar?");
}
function func3(): void {
   console.log("Logo!");
} */
//Aufgabe 2
/* function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0);
}
a2(); */
//Aufgabe 4
/* let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void{
    y = "Bla";
    console.log(y);
}

function func2(): void{
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void{
    x = "Test";
} */
//Aufgabe 5
//a)
/* let i: number = 2;
let j: number = 5;
multiply( i , j );
max( i , j );


function multiply(x: number, y: number): void {
    let z: number = x * y;
    console.log(z);
} */
//b)
/* function max(x: number, y: number): void {
    if (x > y) {
        console.log(x);
    } else {
        console.log(y);
    }
} */
//c)
/* Summe();
function Summe(): void {
    let a: number = 1;
    let b: number = 0;
    while (a < 101) {
        b = b + a;
        a++;
    }
    console.log(b);
} */
//d)
/* let a: number = 0;
zufaellig();
function zufaellig(): void {
    for (a = 0; a < 10; a++) {
        console.log(Math.random() * 100);
    }
} */
//e)
/* console.log(factorial(4));

function factorial(n: number): number {
    let a: number = 2;
    let b: number = 1;
    if (n < 1) {
        return 1;
    }
    for (a = 1; a <= n; a++) {
        b = b * a;
    }
    return b;
} */
//f)
/* leapyears();
function leapyears(): void {
    let year: number = 1900;
    
    while (year < 2022) {
        if (year % 400 == 0) {
            console.log(year);
        }
        else {
            if (year % 4 == 0 && year % 100 != 0) {
            console.log(year);
            }
        }
        year++;
    }
} */
//Aufgabe 6
// a)
/* hashtags();
function hashtags(): void {
    let hashtag: string = "#";
    let anzahl: number = 1;
    while (anzahl < 8) {
        console.log(hashtag);
        hashtag += "#";
        anzahl++;
    }
} */
//b)
/* fizzBuzz();
function fizzBuzz(): void {
    let zähler: number = 1;
    while (zähler < 101) {
        if (zähler % 3 == 0) {
            console.log("Fizz");
        }
        else {
            if (zähler % 5 == 0) {
                console.log("Buzz");
            }
            else {
                console.log(zähler);
            }
        }
        zähler++;
    }
} */
//c)
/* fizzBuzz2();
function fizzBuzz2(): void {
    let zähler: number = 1;
    while (zähler < 101) {
        if (zähler % 3 == 0 && zähler % 5 == 0) {
            console.log("FizzBuzz");
        }
        else {
            if (zähler % 3 == 0) {
                console.log("Fizz");
            }
            else {
                if (zähler % 5 == 0) {
                    console.log("Buzz");
                }
                else {
                    console.log(zähler);
                }
            }
            
        }
        zähler++;
    } */
//d)
schach(8);
function schach(brettScale) {
    let zeile = "";
    for (let i = 0; i < brettScale; i++) {
        for (let j = 0; j < brettScale; j++) {
            if (i % 2) {
                if (j % 2 == 0) {
                    zeile += "#";
                }
                else {
                    zeile += " ";
                }
            }
            else {
                if (j % 2 == 0) {
                    zeile += " ";
                }
                else {
                    zeile += "#";
                }
            }
        }
        zeile += "\n";
    }
    console.log(zeile);
}
//e) in d) inbegriffen
//ANTWORTEN & LÖSUNGEN
/* Aufgabe 1
a) Ausgaben:
Alles   Klar?   Logo!

b) Reihenfolge:
Als erstes wird funktion a1() ausgeführt.
Ausgegeben wird dabei:
Zeile 2: Alles
Dann, bzw. in function a1 wird func1() ausgeführt wobei es zu folgender Ausgabe kommt:
Zeile 3 bzw 10: Klar?
Danach geht es in funtion a1() weiter mit der Ausgabe:
Zeile 4: Logo!

Aufgabe 2
Als erstes wird i auf 9 gesetzt.
Der aktuelle Wert von i wird dann in der do-Schleife ausgegeben.
Daraufhin wird i um eins reduziert und die Schleife wiederholt sich solange bis i = 0 ist.
Die Ausgaben sind dementsprechen: 9,8,7,6,5,4,3,2,1

Aufgabe 4
a) Ausgaben:
a)
Ausgabe 1: Hallo   (x wird initialisiert und ausgegeben)
Ausgabe in func1(y: string): Bla  (y erst "importiert", dann geändert und anschließend ausgegeben)
Ausgabe 3: Hallo
Ausgabe in func2(): Blubb   (x wird in der Funktion initialisiert und anschließend ausgegeben)
Ausgabe 5: Test    (x wurde in func3() zu "Test" geändert)
b)
Wie der Name schon sagt, beschreibt eine Funktion einen Ablauf, während "normale" Variablen
Platzhalter für einfache Ziffern-/Zahlen(folgen) wie z.B. 123 oder abc.
*/
//# sourceMappingURL=script.js.map