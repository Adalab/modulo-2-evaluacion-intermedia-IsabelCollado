"use strict";

//constantes

const inpEle = document.querySelector(".js-inpnumber");
const btn = document.querySelector(".js-btn");
const clueEle = document.querySelector(".js-clue");
const trieElem = document.querySelector(".js-tried");

console.log("holiiii");

//funciones

function getRandomNumber(max) {
  const numberRandom = Math.ceil(Math.random() * max);
  return numberRandom;
}

function useRandomNumber() {
  //const userNumber = numberSelection.value;

  const randomNumber = getRandomNumber(100);

  console.log(randomNumber);
  if (inpEle.value === randomNumber) {
    clueEle.innerHTML = "Has ganado campeona!!!";
  } else if (inpEle.value < randomNumber && inpEle.value > 0) {
    clueEle.innerHTML = "Demasiado bajo";
  } else if (inpEle.value > randomNumber && inpEle.value < 101) {
    clueEle.innerHTML = "Demasiado alto";
  }
  if (inpEle.value > 100 || inpEle.value < -1) {
    clueEle.innerHTML = "El número debe estar entre 1 y 100";
  }
}

const countAttemps = getRandomNumber(100);
let attempts = 1;

function trieEle() {
  const totalTries = attempts++;

  tryUser.innerHTML = `Número de intentos: ${totalTries}`;
}

//eventos

function handleClickBtn(ev) {
  ev.preventDefault();

  useRandomNumber();

  trieEle();
}

btn.addEventListener("click", handleClickBtn);
