"use strict";

const enterNumber = document.querySelector(".js_enterNumber");
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

function writeClueText(msj) {
  clueElement.innerHTML = msj;
}

function compareNumber() {
  const numberEnterValue = parseInt(enterNumber.value);

  increaseAttempts(numberEnterValue);
  if (isNaN(numberEnterValue)) {
    writeClueText("Introduce un número");
  } else if (numberEnterValue < 1 || numberEnterValue > 100) {
    writeClueText("El número debe estar entre 1 y 100.");
  } else if (numberEnterValue > randomNumber) {
    writeClueText("Demasiado alto, prueba de nuevo.");
  } else if (numberEnterValue < randomNumber) {
    writeClueText("Demasiado bajo, prueba de nuevo.");
  } else if (numberEnterValue === randomNumber) {
    writeClueText("Has acertado campeona!!!");
  }
}

function handleClickBtn(ev) {
  ev.preventDefault();
  compareNumber();
}

function handleClicResetBtn(ev) {
  ev.preventDefault();
  enterNumber.value = "";
  triesElement.innerHTML = 0;
  clueElement.innerHTML = "Pista: Escribe el número y dale a Prueba ";
}

btn.addEventListener("click", handleClickBtn);
btnReset.addEventListener("click", handleClicResetBtn);
