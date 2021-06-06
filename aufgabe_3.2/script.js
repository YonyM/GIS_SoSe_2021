"use strict";
var P_3_1Server;
(function (P_3_1Server) {
    let pfad;
    let hTMLButton = document.getElementById("HTMLButton");
    hTMLButton.addEventListener("click", function () { pfad = "/html"; anfrage(); });
    let jSONButton = document.getElementById("JSONButton");
    jSONButton.addEventListener("click", function () { pfad = "/json"; anfrage(); });
    async function anfrage() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://yonysgisserver.herokuapp.com";
        //let url: string = "http://localhost:8101";
        if (pfad == "/html") {
            url += "/html" + "?" + query.toString();
        }
        else if (pfad == "/json") {
            console.log("JSON-Datei:");
            url += "/json" + "?" + query.toString();
        }
        let antwort = await fetch(url, { method: "get" });
        let antwortText = await antwort.text();
        if (pfad == "/html") {
            let antwortDiv = document.createElement("div");
            document.body.appendChild(antwortDiv);
            antwortDiv.innerHTML = antwortText;
        }
        if (pfad == "/json") {
            let antwortJson = await JSON.parse(antwortText);
            console.log(antwortJson);
        }
    }
})(P_3_1Server || (P_3_1Server = {}));
//# sourceMappingURL=script.js.map