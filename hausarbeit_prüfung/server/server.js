"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Memeory;
(function (Memeory) {
    let port = 8101;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    let karten;
    let zeiten;
    let urlDB = "mongodb+srv://HelloWorld2021:HelloWorld2021@fuergisregistrierichmic.lq7zx.mongodb.net/MemeoryDB?retryWrites=true&w=majority";
    async function connectToDB(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        karten = mongoClient.db("MemeoryDB").collection("Karten");
        zeiten = mongoClient.db("MemeoryDB").collection("NamenUndZeiten");
    }
    connectToDB(urlDB);
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        let _url = Url.parse(_request.url, true);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        console.log(_url.pathname);
        if (_url.pathname == "/kartenAnfragen") {
            _response.write(JSON.stringify(await karten.find().toArray()));
            _response.end();
        }
        if (_url.pathname == "/zeitenAnfragen") {
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
    function handleListen() {
        console.log("ich warte...");
    }
})(Memeory || (Memeory = {}));
//# sourceMappingURL=server.js.map