namespace P_3_1Server {

    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", anfrage);

    async function anfrage(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://yonysgisserver.herokuapp.com/" + "?" + query.toString();

        let antwort: Response = await fetch(url, {method: "get"});

        console.log(await antwort.text());
    }
}