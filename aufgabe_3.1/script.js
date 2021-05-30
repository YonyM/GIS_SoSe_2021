"use strict";
var P_3_1Server;
(function (P_3_1Server) {
    let button = document.getElementById("button");
    button.addEventListener("click", anfrage);
    async function anfrage() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://yonysgisserver.herokuapp.com/" + "?" + query.toString();
        let antwort = await fetch(url, { method: "get" });
        console.log(await antwort.text());
    }
})(P_3_1Server || (P_3_1Server = {}));
//# sourceMappingURL=script.js.map