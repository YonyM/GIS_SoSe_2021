import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

namespace Memeory {
    let karten: Mongo.Collection;

    let port: number = Number(process.env.PORT);
    if (!port) {
        port = 8101;
    }
    let server: Http.Server = Http.createServer();

    console.log(port);
    
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);

    server.listen(port);


  
    let zeiten: Mongo.Collection;

    let urlDB: string = "mongodb+srv://HelloWorld2021:HelloWorld2021@fuergisregistrierichmic.lq7zx.mongodb.net/MemeoryDB?retryWrites=true&w=majority";

    async function connectToDB(_url: string): Promise<void> {

        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        karten = mongoClient.db("MemeoryDB").collection("Karten");
       // zeiten = mongoClient.db("MemeoryDB").collection("NamenUndZeiten");
        console.log("Database connected", karten != undefined);
        console.log("Warum geht das nich????");
    }

    connectToDB(urlDB);

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        console.log("I hear voices!");

        let _url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

        //_response.setHeader("content-type", "text/html; charset=utf-8");
        //_response.setHeader("Access-Control-Allow-Origin", "*");
        console.log(_url.pathname);

        if (_url.pathname == "/kartenAnfragen") {

            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            _response.write(JSON.stringify(await karten.find().toArray()));
            _response.end();

        }
        if (_url.pathname == "/zeitenAnfragen") {

            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            _response.write(JSON.stringify(await zeiten.find().toArray()));
            _response.end();

        }
        if (_url.pathname == "/karteHinzufuegen") {

            console.log("aaaalles klar");
            karten.insertOne(_url.query);
        }
        if (_url.pathname == "/zeitEintragen") {

            console.log(_url.query);
            zeiten.insertOne(_url.query);
        }
        else {

            console.log(_url.pathname.substr(1, _url.pathname.length));
            karten.deleteOne({ "bezeichnung": _url.pathname.substr(1, _url.pathname.length) });

        }
        //_response.end();


    }

    function handleListen(): void {
        console.log("ich warte...");
    }

}