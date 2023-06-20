const urlApi = 'https://rickandmortyapi.com/api/character/1'

let textAPI1 = document.getElementById('text-API1');
let imageElement = document.getElementById('pic-1');

const config = {
    headers: {
        Accept: "application/json",
    },
}

fetch(urlApi, config)
.then((respuesta) => respuesta.json())
.then((data) => {
    textAPI1.innerHTML = `${data.name} <br> ${data.gender} <br> ${data.status}`;
    imageElement.src = data.image;
    statusElement.innerHTML = data.status;
})
