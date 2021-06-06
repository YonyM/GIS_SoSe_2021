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
        let url;
        if (pfad == "/html") {
            url = "https://yonysgisserver.herokuapp.com/html" + "?" + query.toString();
        }
        else if (pfad == "/json") {
            console.log("JSON-Datei:");
            url = "https://yonysgisserver.herokuapp.com/json" + "?" + query.toString();
        }
        let antwort = await fetch(url, { method: "get" });
        let antwortText = await antwort.text();
        if (pfad == "/html") {
            let antwortDiv = document.createElement("div");
            antwortDiv.innerHTML = antwortText;
            document.body.appendChild(antwortDiv);
        }
        if (pfad == "/json") {
            let antwortJson = await JSON.parse(antwortText);
            console.log(antwortText);
        }
    }
})(P_3_1Server || (P_3_1Server = {}));
//# sourceMappingURL=script.js.map