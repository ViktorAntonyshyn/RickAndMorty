function buscar() {
    const statusFilter = document.getElementById('status-filter').value;
    const speciesFilter = document.getElementById('species-filter').value;
    const genderFilter = document.getElementById('gender-filter').value;
  
    const apiUrl = 'https://rickandmortyapi.com/api/character';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const characters = data.results;
        const filteredCharacters = characters.filter(character => {
          if (statusFilter && character.status !== statusFilter) return false;
          if (speciesFilter && character.species !== speciesFilter) return false;
          if (genderFilter && character.gender !== genderFilter) return false;
          return true;
        });
  
        const characterCardsContainer = document.getElementById('character-cards');
        characterCardsContainer.innerHTML = '';
  
        filteredCharacters.forEach(character => {
          const card = document.createElement('div');
          card.classList.add('tarjeta');
          card.onclick = myFunction; // Додайте необхідну функцію onclick
          function myFunction() {
            let tarjeta = event.currentTarget;
            let audio = new Audio('./public/audio/yes.mp3'); // audio
            tarjeta.classList.add('animation'); // add amimation
            audio.play();
          
            setTimeout(function() {
              tarjeta.classList.remove('animation'); // remove aminacion
              audio.pause(); //stop audio
            }, 3000); 
          }

          const img = document.createElement('img');
          img.classList.add('pic-small');
          img.src = character.image;
          img.alt = character.name;
  
          const text = document.createElement('p');
          text.classList.add('textAPI');
          text.innerHTML = `${character.name}<br>${character.gender}<br>${character.status}`;
  
          card.appendChild(img);
          card.appendChild(text);
  
          characterCardsContainer.appendChild(card);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }