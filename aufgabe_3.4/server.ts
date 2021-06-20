import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


let port: number = 8101;
let server: Http.Server = Http.createServer();

server.addListener("request", handleRequest);
server.addListener("listening", handleListen);

server.listen(port);

interface Students {
    fname: string;
    lname: string;
    matrikelnr: number;

}

let students: Mongo.Collection;

let url: string = "mongodb://localhost:27017";
//let url: string = "mongodb+srv://fuergisregistrierichmic.lq7zx.mongodb.net";


async function connectToDatabase(_url: string): Promise<void> {

    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();

    students = mongoClient.db("Test").collection("Students");

}
connectToDatabase(url);


async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

    console.log("handleRequest");

    let _url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);


    if (_url.pathname == "/datenAbschicken") {

        console.log(_url.query);
        students.insertOne(_url.query);
        //students.deleteMany({"lname": "Georgii"});   
    }
    
    if (_url.pathname == "/datenAnzeigen") {

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        let cursor: Mongo.Cursor = students.find();
        let dbInhalt: Students[] = await cursor.toArray();
        _response.write(JSON.stringify(dbInhalt));
        console.log(JSON.stringify(dbInhalt));
        _response.end();
    }
}

function handleListen(): void {
    console.log("ich warte...");
}

