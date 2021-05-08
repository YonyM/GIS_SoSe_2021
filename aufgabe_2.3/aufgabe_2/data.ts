namespace Klappbuch {



    export const daten: Kategorie[] = [
       
        {
            name: "Oben", 
            option1: { position: "Oben", bildPfad: "./Datein/Rot.jpg" }, 
            option2: { position: "Oben", bildPfad: "./Datein/Gruen.jpg" }, 
            option3: { position: "Oben", bildPfad: "./Datein/Blau.jpg" } 
        },
        {
            name: "Mitte",
            option1: { position: "Mitte", bildPfad: "Mitte_1.jpg" }, 
            option2: { position: "Mitte", bildPfad: "Mitte_2.jpg" }, 
            option3: { position: "Mitte", bildPfad: "Mitte_3.jpg" } 
        },
        {
            name: "Unten",
            option1: { position: "Unten", bildPfad: "Unten_1.jpg" }, 
            option2: { position: "Unten", bildPfad: "Unten_2.jpg" }, 
            option3: { position: "Unten", bildPfad: "Unten_3.jpg" } 
        }
    ];
}