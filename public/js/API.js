let urlApi = 'https://rickandmortyapi.com/api/character';

let config = {
    headers: {
        Accept: "application/json",
    },
};

fetch(urlApi, config)
  .then((response) => response.json())
  .then((data) => {
    let characters = data.results;

    characters.forEach((character, index) => {
      let characterId = index + 1;
      let characterName = character.name;
      let characterImage = character.image;
      let characterStatus = character.status;
      let characterGender = character.gender;

      let characterElement = document.getElementById(`text-API${characterId}`);
      let imageElement = document.querySelector(`#pic${characterId}`);

      characterElement.innerHTML = `${characterName}<br>${characterGender}<br>${characterStatus}`;
      imageElement.src = characterImage;
      imageElement.alt = characterName;
    });
  })
  .catch((error) => {
    console.log(error);
  });