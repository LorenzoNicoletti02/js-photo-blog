// Prendo elementi HTML
const row = document.querySelector(".row");
const buttonModal = document.getElementById("buttonModal");
const imgModal = document.getElementById("imgModal");
const overlay = document.querySelector(".overlay");


const printCards = (arrayObject) => {
    
    // Ciclo for per iterare oggetti dell'arrayData
    for (let i = 0; i < arrayObject.length; i++) {
        const curObject = arrayObject[i];
        
        // Prendo due proprietà dall'oggetto e le metto in due variabili
        let {title, url } = curObject;
        
        // Creo un variabile contente il nuovo html da aggiungere sottoforma di stringa fra backtick
        const cardHtml = `
        <div class="card"> 
            <img src="${url}" alt="">
            <p>${title}</p>
        </div>`;
        
        // Aggiungo la stringa html alla row tramite innerHTML 
        row.innerHTML += cardHtml;
    }
}

// Chiamata API, timeout in millisecondi, aspetta 12 sec per ricevere risposta
// L'API è come un ponte che permette di far comunicare due servizi o applicazioni
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6", {timeout: 12000})
.then(resp => {
    
    // console.log("Dati dall'API", resp.data);
    const arrayData = resp.data;
    
    // Richiamo la funzione per stampare le card e gli passo come parametro un array di 
    // oggetti del risultato delle API
    printCards(arrayData);
    
    // console.log(cardImg);
    
    // Ora possiamo procedere con il ragionamento del click sull'immagine della card (cardImg)
    //andiamo a prendere la card che abbiamo creato sopra
    const cardsImg = document.querySelectorAll(".card img");
    
    //for per ciclare le immagini di cardsImg
    for (let i = 0; i < cardsImg.length; i++) {
        const img = cardsImg[i];
        
        // Cliccando sulla card si apre l'overlay della card specifica
        //aggiungiamo l'evento click sulla cardImg corrente
        img.addEventListener("click", () => {

            // Rimuovo la classe d-none dall'elemento overlay
            overlay.classList.remove("d-none");

            // Cambio l'src della imgModal con l'src specifico della card cliccata
            imgModal.src = img.src;
        } )
    }

    // Per chiudere l'overlay devo riattivare la classe d-none al click sul bottone
    buttonModal.addEventListener("click", () => {
        overlay.classList.add("d-none");
    })
});






