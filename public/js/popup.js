function myFunction() {
    const tarjeta = event.currentTarget;
    tarjeta.classList.add('animation-class'); // Додати клас для анімації
  
    setTimeout(function() {
      tarjeta.classList.remove('animation-class'); // Видалити клас для повернення
    }, 2000); // Затримка 2 секунди (2000 мілісекунд) перед поверненням
  }






/* WORKS!!!

function myFunction() {
    // Отримуємо елементи з класом 'tarjeta'
    var tarjetas = document.getElementsByClassName('tarjeta');
    
    // Додаємо клас 'rotate' до кожного елемента з класом 'tarjeta'
    for (var i = 0; i < tarjetas.length; i++) {
      tarjetas[i].classList.add('rotate');
    }
  } */

