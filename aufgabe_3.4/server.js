"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
let port = 8101;
let server = Http.createServer();
server.addListener("request", handleRequest);
server.addListener("listening", handleListen);
server.listen(port);
let students;
//let url: string = "mongodb://localhost:27017";
let url = "mongodb+srv://fuergisregistrierichmic.lq7zx.mongodb.net";
async function connectToDatabase(_url) {
    let options = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    students = mongoClient.db("Test").collection("Students");
}
connectToDatabase(url);
async function handleRequest(_request, _response) {
    console.log("handleRequest");
    let _url = Url.parse(_request.url, true);
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    if (_url.pathname == "/datenAbschicken") {
        console.log(_url.path);
        students.insertOne(_url.query);
    }
    if (_url.pathname == "/datenAnzeigen") {
        let cursor = students.find();
        let dbInhalt = await cursor.toArray();
        _response.write(JSON.stringify(dbInhalt));
        console.log(JSON.stringify(dbInhalt));
    }
    _response.end();
}
function handleListen() {
    console.log("ich warte...");
}
//# sourceMappingURL=server.js.map