import * as Http from "http"; //import sämtlicher Funktionalitäten von "http"
import * as Url from "url";

export namespace P_3_1Server {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)   //Checkt den Port
        port = 8100;

    let server: Http.Server = Http.createServer();  //Erstellt Server
    server.addListener("request", handleRequest);   //hängt ein Listener für den Fall einer Serveranfrage an.
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {  //Wird 1x nach dem Start ausgeführt wenn der Server "zuhört"
        console.log("Listening");
    }

    // wird ausgeführt wenn der Server eine Anfrage bekommt
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        console.log(Url);
        _response.end();
    }
}