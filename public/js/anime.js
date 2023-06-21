function myFunction() {
    const tarjeta = event.currentTarget;
    tarjeta.classList.add('animation'); // add amimation
  
    setTimeout(function() {
      tarjeta.classList.remove('animation'); // remove aminacion
    }, 2000); 
  }

