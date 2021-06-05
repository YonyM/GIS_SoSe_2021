import * as Http from "http"; //import sämtlicher Funktionalitäten von "http"


export namespace P_3_1Server { 
    console.log("Starting server");    //Ausgabe zu Beginn des Serverstarts
    let port: number = Number(process.env.PORT);    //Ist mir nicht ganz klar
    if (!port)   
        port = 8100;  // Setzt den Port auf 8100

    let server: Http.Server = Http.createServer();  //Erstellt neuen http-Server
    server.addListener("request", handleRequest);   //"request-listener" für einkommende Anfragen an den Server -> bei einer Anfrage wird die Funktion "handleRequest ausgeführt"
    server.addListener("listening", handleListen);  //für den Serverstatus "Listening" wird durch dieses Listener die Funktion "handleListen" ausgeführt
    server.listen(port); // horcht auf dem gewählten Port nach Anfragen

    function handleListen(): void {  //Wird nach dem Start ausgeführt wenn der Server "zuhört"
        console.log("Listening");    // Zeigt mit der Ausgabe "Listening", dass der Server zuhört
    }

    // wird ausgeführt wenn der Server eine Anfrage bekommt
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");  //Wird ausgegeben sobald der Server von jemandem erreicht wurde und die handleRequest "aktiviert" wird
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Definiert die "Art" der response-Daten
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url); //Zeigt die individuelle request-URL an.
        console.log(_request.url); //Gibt die individuelle request-URL aus.
        _response.end();
    }
}