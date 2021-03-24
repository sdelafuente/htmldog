// getElementById
var pageHeader = document.getElementById('header');

// getElementsByTagName
var by = document.getElementsByTagName('p');

for (var i = 0; i < by.length; i++) {
    // console.log(by[i].innerText);
}

// querySelector
var pageHeader = document.querySelector('#header');
var buttons    = document.querySelectorAll('.btn');


// Event Listener
var contactForm = document.getElementById('contact-form');
var button      = document.querySelector('#borrar');

const form        = document.getElementById('form');
const elementoLog = document.getElementById('log');

// Manejar el click de un botón
var handleClick = function (event) {
    // do something!
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
};

button.addEventListener('click', handleClick);
contactForm.addEventListener('submit', handleClick);

// Función que se llama en un evento
function generarLog(event) {
  // log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;

  //Formato JSON
  var jsonString = JSON.stringify({
      make: "McLaren",
      model: "MP4-12C",
      miles: 5023
  });

  // Asigno el valor dentro del elemento log
  elementoLog.textContent = jsonString;
  event.preventDefault(); // Evita que la página se refresque
}

form.addEventListener('submit', generarLog);

// Scope - Alcance de Variables
var aa = 10;

if (aa > 5) {
    var bb = 5;
}

var cc = aa + bb; // Wouldn't work!
// console.log(cc);

// Scope, alcance de variables dentro de funciones anidadas
var doSomething = function () {
    var que = 10;

    doSomethingElse = function () {
        console.log(que);
    };

    // Llamada
    doSomethingElse();
};

// Llamada
// doSomething();

// console.log(que); // a is undefined
