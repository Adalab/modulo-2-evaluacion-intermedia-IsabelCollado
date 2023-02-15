"use strict";

/*  1- Crear HTML, CSS y enlazar JS. OK!
    2- Escribir la estructura de HTML: necesitamos un título, 1 label, 2 input (1-bottom) y 2 párrafos ( 1 para la pista y el segundo para los intentos). OK!
    3- Crear las constantes de html en js. OK!
    4- Generar número Random cuando carga la página, solamente. OK!
    5- Escuchar evento sobre el boton de 'prueba' (click). OK!
    6- Validar número de usuaria (1-100).
    7- Comparación del número de la pagina con el de la ususaria.
    8- La pista.
    9- Contador.
    10- Pintar los intentos.
*/

//CONSTANTES

const enterNumber = document.querySelector(".js_enterNumber");
const btn = document.querySelector(".js_btn");
const clueElement = document.querySelector(".js_clue");
const triesElement = document.querySelector(".js_tries");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);

function handleclickbtn(ev) {
  ev.preventDefault();
}

//EVENTOS

btn.addEventListener("click", handleclickbtn);
