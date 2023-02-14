'use strict'

//constantes
 
const inpEle= document.querySelector('.js-inpnumber');
const btn= document.querySelector('.js-btn');
const clueEle= document.querySelector('.js-clue');
const trieEle= document.querySelector('.js-tried');

console.log('holiiii')


//funciones

function getRandomNumber(max) {
    
    const numberRandom =  Math.ceil(Math.random() * max);
    return numberRandom;

    }
    function useRandomNumber() {
    const userNumber = numberSelection.value; 
    const randomNumber= getRandomNumber(100);
        if (inp.value === RandomNumber) {
        clueEle.innerHTML = 'Has ganado campeona!!!';

        } else if (inp.value <  RandomNumber &&  inpValue >0){
        clueEle.innerHTML = 'Demasiado bajo';

        }else if (inp.value > RandomNumber && inpValue < 101){
        clueEle.innerHTML = 'Demasiado alto';

        }if(inpValue > 100 || inputValue < -1){
        clueEle.innerHTML = 'El número debe estar entre 1 y 100';
        console
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

btn.addEventListener("click" , handleClickBtn)