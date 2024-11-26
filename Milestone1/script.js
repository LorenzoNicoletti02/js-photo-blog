
const printCards = (arrayObject) => {
    // Ciclo for per iterare oggetti dell'arrayData
    for (let i = 0; i < arrayObject.length; i++) {
        const curObject = arrayObject[i];
        let { title, url } = curObject;
        console.log(title, url);

        // Creo un variabile contente il nuovo html da aggiungere
        const cardHtml = `
            <div class="card"> 
                <img src="${url}" alt="">
                <p>${title}</p>
            </div>`;
        row.innerHTML += cardHtml;
    }
}
// Prendo elementi dall'html
const row = document.querySelector(".row");

// Chiamata API, timeout in millisecondi, aspetta 12 sec per ricevere risposta
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=5", {timeout: 12000})
    .then(resp => {
        // console.log("Dati dall'API", resp.data);
        const arrayData = resp.data;
    // Richiamo la funzione per stampare le card e gli passo come parametro un array di 
    // oggetti del risultato delle API
    printCards(arrayData);
    });


