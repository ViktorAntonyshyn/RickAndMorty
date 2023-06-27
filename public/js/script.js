const urlApi = 'https://rickandmortyapi.com/api/character';

const config = {
    headers: {
        Accept: "application/json",
    },
};

fetch(urlApi, config)
  .then((response) => response.json())
  .then((data) => {
    const characters = data.results;

    characters.slice(0, 40).forEach((character, index) => {
      const characterId = index + 1;
      const characterName = character.name;
      const characterImage = character.image;
      const characterStatus = character.status;
      const characterGender = character.gender;

      const characterElement = document.getElementById(`text-API${characterId}`);
      const imageElement = document.querySelector(`#pic${characterId}`);

      characterElement.innerHTML = `${characterName}<br>${characterGender}<br>${characterStatus}`;
      imageElement.src = characterImage;
      imageElement.alt = characterName;
    });
  })
  .catch((error) => {
    console.log(error);
  });