"use strict";
var Klappbuch;
(function (Klappbuch) {
    class Teilbild {
    }
    class Kategorie {
    }
    Klappbuch.Kategorie = Kategorie;
    let a1 = { auswahlOben: new Teilbild, auswahlMitte: new Teilbild, auswahlUnten: new Teilbild };
    bilderLaden(Klappbuch.daten[0].option1, Klappbuch.daten[0].option1.position);
    bilderLaden(Klappbuch.daten[0].option2, Klappbuch.daten[0].option2.position);
    bilderLaden(Klappbuch.daten[0].option3, Klappbuch.daten[0].option3.position);
    function bilderLaden(teilbild, position) {
        let bild = document.createElement("img");
        bild.classList.add(position);
        bild.src = teilbild.bildPfad;
        document.body.appendChild(bild);
        bild.addEventListener("click", obenSpeichern);
    }
    function obenSpeichern(klick) {
        let ausgewählt = klick.currentTarget;
        a1.auswahlOben.bildPfad = ausgewählt.src;
        a1.auswahlOben.position = "Oben";
        console.log(a1.auswahlOben);
    }
})(Klappbuch || (Klappbuch = {}));
//# sourceMappingURL=script.js.map