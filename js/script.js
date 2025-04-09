
// Recupero elemento dal DOM dove vado a inserire le informazioni enerate dall'endpoint

const row = document.querySelector('.row');

// Chiamata AJAX endpoint

const endpoint = `https://lanciweb.github.io/demo/api/pictures/`

// Array di oggetti

let immagini = [];

// overlay
const overlay = document.querySelector('.overlay')
// overlay button
const button = document.querySelector('button')
// overlay image container
const overlayImage = document.getElementById('overlay-img-container')




// Funzione per creare la colonna Polaroid

const createPolaroid = (array) => {
    let element = ``

    array.forEach((photo) => {
        let {id, title, date, url} = photo;
        // aggiungo id al img-container
        element +=  `<div class="column bg-light  img-container d-flex flex-wrap flex-column position-relative pt-3 pb-4 px-3 my-4 ${id}">
                    <div class="polaroid-img w-100 ${id}">
                            <img class="w-100" src="${url}" alt="immagine">
                        </div>
                    <div class="title">${title}</div>
                    <div class="date">${date}</div>
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

// function to create the correct image to display in overlay
const correctImage = (url) => {
    let element = `<img src="${url}" alt="">`
    overlayImage.innerHTML = element;
}

// clicking overlay button will add overlay-hidden on overlay
button.addEventListener('click', (e) => {
    e.preventDefault;
    overlay.classList.remove('overlay-active')
    overlay.classList.add('overlay-hidden')
})


// Chiamata axios per prelevare tutte le informazioni che mi servono
axios.get(endpoint)
    .then((resp) => {
        console.log(resp)
        console.log(resp.data)
        
        immagini = resp.data
        console.log(immagini)

       
        const elements = createPolaroid(immagini);

        row.innerHTML += elements;

        // once images are presen in DOM, I can get polaroid-img to open overlay
        const polaroidImg = document.querySelectorAll('.polaroid-img')
        console.log(polaroidImg)
        polaroidImg.forEach((image) => {
            image.addEventListener('click', (e) => {
                overlay.classList.remove('overlay-hidden')
                overlay.classList.add('overlay-active')

                // if(image.classList.contains(1)){
                //     correctImage(images[0].url);
                // }
                // else if(image.classList.contains(2)){
                //     correctImage(images[1].url);
                // }
                // else if(image.classList.contains(3)){
                //     correctImage(images[2].url);
                // }
                // else if(image.classList.contains(4)){
                //     correctImage(images[3].url);
                // }
                // else if(image.classList.contains(5)){
                //     correctImage(images[4].url);
                // }
                // else{
                //     correctImage(images[5].url);
                // }

                // better way

                const classIndex = parseInt([...image.classList].find(cls => !isNaN(cls))) - 1;
                // image is a Nodelist, not a classic array. I'll use spread operator to transform it into a classic array
                // ...image.classList access the classList of the clicked image
                // .find(cls => !isNaN(cls)) find the first class that is a number
                // parseInt transform it into a number
                correctImage(immagini[classIndex].url);
            })
        });
        
    });



