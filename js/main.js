"use strict";

const numInput = document.querySelector(".js_enterNumber");
const btn = document.querySelector(".js_btn");
const btnReset = document.querySelector(".js_btn_reset");
const clueElement = document.querySelector(".js_clue");
const triesElement = document.querySelector(".js_tries");
let attempts = 0;

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function increaseAttempts(numberEnter) {
  if (numberEnter !== randomNumber) {
    attempts++;
    triesElement.innerHTML = attempts;
  }
}

function resetAttempts() {
  attempts = 0;
  triesElement.innerHTML = attempts;
}

function writeClueText(msj) {
  clueElement.innerHTML = msj;
}

function compareNumber() {
  const numInputValue = parseInt(numInput.value);

  increaseAttempts(numInputValue);

  if (isNaN(numInputValue)) {
    writeClueText("Para jugar debes introducir un número!!!");
  } else if (numInputValue < 1 || numInputValue > 100) {
    writeClueText("El número debe estar entre 1 y 100.");
  } else if (numInputValue > randomNumber) {
    writeClueText("Demasiado alto, prueba de nuevo.");
  } else if (numInputValue < randomNumber) {
    writeClueText("Demasiado bajo, prueba de nuevo.");
  } else if (numInputValue === randomNumber) {
    writeClueText("Has acertado campeona!!!");
  }
}

function handleClickBtn(ev) {
  ev.preventDefault();
  compareNumber();
}

function handleClicResetBtn(ev) {
  ev.preventDefault();
  const number = getRandomNumber(100);
  console.log(number);
  numInput.value = "";
  writeClueText('Escribe un número nuevo y dale al botón "Prueba"');
  resetAttempts();
}

btn.addEventListener("click", handleClickBtn);
btnReset.addEventListener("click", handleClicResetBtn);
