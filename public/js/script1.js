const urlApi = 'https://rickandmortyapi.com/api/character/1'; // Змінений URL з ID 1

let nameElement = document.getElementById('name');
let imageElement = document.getElementById('image');
let statusElement = document.getElementById('status');

const config = {
  headers: {
    Accept: "application/json", // Виправлено орфографічну помилку в "application/json"
  },
};

fetch(urlApi, config)
  .then((response) => response.json())
  .then((data) => {
    nameElement.innerHTML = data.name;
    imageElement.src = data.image;
    statusElement.innerHTML = data.status;
  });