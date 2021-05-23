namespace KlappbuchAlt {

    let gesamtbildDiv: HTMLDivElement = document.createElement("div");
    document.body.appendChild(gesamtbildDiv);

    let oben: HTMLImageElement = document.createElement("img");
    oben.src = sessionStorage.getItem("oben");
    gesamtbildDiv.appendChild(oben);
    console.log(oben.getAttribute("src"));

    let mitte: HTMLImageElement = document.createElement("img");
    mitte.src = sessionStorage.getItem("mitte");
    gesamtbildDiv.appendChild(mitte);
    console.log(mitte.getAttribute("src"));

    let unten: HTMLImageElement = document.createElement("img");
    unten.src = sessionStorage.getItem("unten");
    gesamtbildDiv.appendChild(unten);
    console.log(unten.getAttribute("src"));

}