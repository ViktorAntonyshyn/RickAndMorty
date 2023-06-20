const urlApi = 'https://rickandmortyapi.com/api/character'

let textAPI = document.getElementById('text-API');

const config = {
    headers: {
        Accept: "applicaccion/json",
    },
}

fetch(urlApi, config)
.then((respuesta) => respuesta.json())
.then((data) => {
    textAPI.innerHTML = data.id
    console.log(data.id)
})
