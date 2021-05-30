"use strict";
var KlappbuchAlt;
(function (KlappbuchAlt) {
    KlappbuchAlt.daten = [
        {
            name: "Oben",
            optionen: [
                { position: "Oben", bildPfad: "./Datein/Dach_1.jpg" },
                { position: "Oben", bildPfad: "./Datein/Dach_2.jpg" },
                { position: "Oben", bildPfad: "./Datein/Dach_3.jpg" }
            ]
        },
        {
            name: "Mitte",
            optionen: [
                { position: "Mitte", bildPfad: "./Datein/Stockwerk_1.jpg" },
                { position: "Mitte", bildPfad: "./Datein/Stockwerk_2.jpg" },
                { position: "Mitte", bildPfad: "./Datein/Stockwerk_3.jpg" }
            ]
        },
        {
            name: "Unten",
            optionen: [
                { position: "Unten", bildPfad: "./Datein/Erdgeschoss_1.jpg" },
                { position: "Unten", bildPfad: "./Datein/Erdgeschoss_2.jpg" },
                { position: "Unten", bildPfad: "./Datein/Erdgeschoss_3.jpg" }
            ]
        }
    ];
    KlappbuchAlt.datenJSON = JSON.stringify(KlappbuchAlt.daten);
})(KlappbuchAlt || (KlappbuchAlt = {}));
//# sourceMappingURL=data.js.map