
// Recupero elemento dal DOM dove vado a inserire le informazioni enerate dall'endpoint

const row = document.querySelector('.row');

// Chiamata AJAX endpoint

const endpoint = `https://lanciweb.github.io/demo/api/pictures/`

// Array di oggetti

let immagini = [];

// Funzione per creare la colonna Polaroid

const createPolaroid = (array) => {
    let element = ``

    array.forEach((photo) => {
        let {id, title, date, url} = photo;
        // aggiungo id al img-container
        element +=  `<div class="column bg-light  img-container d-flex flex-wrap position-relative pt-3 px-3 my-4 ${id}">
                    <img class="w-100" src="${url}" alt="">
                    <div class="date">${date}</div>
                            <div class="title">${title.toUpperCase()}</div>
                        </div>
                        <div class="pin">
                            <img src="./img/pin.svg" alt="pin">
                    </div>
                </div>`
    });

    for(i=0; i<array.length; i++){
        
    }
    console.log(element)
    return element
}


