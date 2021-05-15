namespace Klappbuch {

    export const daten: Kategorie[] = [
       
        {
            name: "Oben", 

            optionen: [ 
            {position: "Oben", bildPfad: "./Datein/Dach_1.jpg"}, 
            {position: "Oben", bildPfad: "./Datein/Dach_2.jpg"}, 
            {position: "Oben", bildPfad: "./Datein/Dach_3.jpg"} 
            ]
            /*option1: { position: "Oben", bildPfad: "./Datein/Rot.jpg" }, 
            option2: { position: "Oben", bildPfad: "./Datein/Gruen.jpg"}, 
            option3: { position: "Oben", bildPfad: "./Datein/Blau.jpg" }*/
        },       
        {
            name: "Mitte",

            optionen: [ 
            {position: "Mitte", bildPfad: "./Datein/Stockwerk_1.jpg"}, 
            {position: "Mitte", bildPfad: "./Datein/Stockwerk_2.jpg"}, 
            {position: "Mitte", bildPfad: "./Datein/Stockwerk_3.jpg"} 
            ]
            /*option1: { position: "Mitte", bildPfad: "./Datein/Blau.jpg" }, 
            option2: { position: "Mitte", bildPfad: "./Datein/Rot.jpg" }, 
            option3: { position: "Mitte", bildPfad: "./Datein/Gruen.jpg" }*/ 
        },
        {
            name: "Unten",
            optionen: [ 
            {position: "Unten", bildPfad: "./Datein/Erdgeschoss_1.jpg"}, 
            {position: "Unten", bildPfad: "./Datein/Erdgeschoss_2.jpg"}, 
            {position: "Unten", bildPfad: "./Datein/Erdgeschoss_3.jpg"} 
            ]
            /*option1: { position: "Unten", bildPfad: "./Datein/Gruen.jpg" }, 
            option2: { position: "Unten", bildPfad: "./Datein/Blau.jpg" }, 
            option3: { position: "Unten", bildPfad: "./Datein/Rot.jpg" } */
        }
    ];
    export let datenJSON: string = JSON.stringify(daten);
}