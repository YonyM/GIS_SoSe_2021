"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http"); //import sämtlicher Funktionalitäten von "http"
const Url = require("url");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server"); //Ausgabe zu Beginn des Serverstarts
    let port = Number(process.env.PORT); //Ist mir nicht ganz klar
    if (!port)
        port = 8101; // Setzt den Port auf 8100
    let server = Http.createServer(); //Erstellt neuen http-Server
    server.addListener("request", handleRequest); //"request-listener" für einkommende Anfragen an den Server -> bei einer Anfrage wird die Funktion "handleRequest ausgeführt"
    server.addListener("listening", handleListen); //für den Serverstatus "Listening" wird durch dieses Listener die Funktion "handleListen" ausgeführt
    server.listen(port); // horcht auf dem gewählten Port nach Anfragen
    function handleListen() {
        console.log("Listening"); // Zeigt mit der Ausgabe "Listening", dass der Server zuhört
    }
    // wird ausgeführt wenn der Server eine Anfrage bekommt
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Wird ausgegeben sobald der Server von jemandem erreicht wurde und die handleRequest "aktiviert" wird
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let urlparse = Url.parse(_request.url, true);
        let url = new URL(_request.url, "https://yonysgisserver.herokuapp.com");
        if (url.pathname == "/html") {
            for (let key in urlparse.query) {
                console.log("html");
                _response.write("<p>" + key + ":" + urlparse.query[key] + "<p/>");
            }
        }
        else if (url.pathname == "/json") {
            console.log("json");
            let antwortJson = JSON.stringify(urlparse.query);
            _response.write(antwortJson);
        }
        _response.end();
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=server.js.map