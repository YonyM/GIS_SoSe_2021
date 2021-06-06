
namespace P_3_1Server {

    let pfad: string;
    let hTMLButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("HTMLButton");
    hTMLButton.addEventListener("click", function(): void {pfad = "/html"; anfrage(); });
    let jSONButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("JSONButton");
    jSONButton.addEventListener("click", function(): void {pfad = "/json"; anfrage(); });


    async function anfrage(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string;

        if (pfad == "/html") {

            url = "https://yonysgisserver.herokuapp.com/html" + "?" + query.toString();
        }
        else if (pfad == "/json") {

            console.log("JSON-Datei:");
            url = "https://yonysgisserver.herokuapp.com/json" + "?" + query.toString();
        }

        let antwort: Response = await fetch(url, {method: "get"});
        let antwortText: string = await antwort.text();

        if (pfad == "/html") {

            let antwortDiv: HTMLDivElement = document.createElement("div");
            antwortDiv.innerHTML = antwortText;
            document.body.appendChild(antwortDiv);
        }
        if (pfad == "/json") {

            let antwortJson: JSON = await JSON.parse(antwortText);
            console.log(antwortText);
        }       
    }
}