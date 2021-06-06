
namespace P_3_1Server {

    let pfad: string;
    let hTMLButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("HTMLButton");
    hTMLButton.addEventListener("click", function(): void {pfad = "/html"; anfrage(); });
    let jSONButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("JSONButton");
    jSONButton.addEventListener("click", function(): void {pfad = "/json"; anfrage(); });


    async function anfrage(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://yonysgisserver.herokuapp.com";
        //let url: string = "http://localhost:8101";


        if (pfad == "/html") {

            url += "/html" + "?" + query.toString();
        }
        else if (pfad == "/json") {

            console.log("JSON-Datei:");
            url += "/json" + "?" + query.toString();
        }

        let antwort: Response = await fetch(url, {method: "get"});
        let antwortText: string = await antwort.text();

        if (pfad == "/html") {

            let antwortDiv: HTMLDivElement = document.createElement("div");
            document.body.appendChild(antwortDiv);
            antwortDiv.innerHTML = antwortText;
        }
        if (pfad == "/json") {

            let antwortJson: JSON = await JSON.parse(antwortText);
            console.log(antwortJson);
        }       
    }
}