'use strict'

//constantes
 
const typeEle= document.querySelector('.js-type');
const btn= document.querySelector('.js-btn');
const clueEle= document.querySelector('.js-clue');
const trieEle= document.querySelector('.js-tried');







//funciones


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }









//eventos
function handleClickBtn(ev) {
    ev.preventDefault();
    setRandomBackground();
}

btn.addEventListener("click" , handleClickBtn)