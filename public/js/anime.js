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

