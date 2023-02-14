'use strict'

//constantes
 
const inpEle= document.querySelector('.js-inpnumber');
const btn= document.querySelector('.js-btn');
const clueEle= document.querySelector('.js-clue');
const trieEle= document.querySelector('.js-tried');

console.log('holiiii')


//funciones

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

    const randomNumber= getRandomNumber(100);

    const comparar =() =>{
        
    let inpValue = parseInt(inp.value);

        if (inp.value === RandomNumber) {
        clueEle.innerHTML = 'Has ganado campeona!!!';

        } else if (inp.value <        RandomNumber &&  inpValue >0){
        clueEle.innerHTML = 'Demasiado bajo';

        }else if (inp.value > RandomNumber && inpValue < 101){
        clueEle.innerHTML = 'Demasiado alto';

        }if(inpValue > 100 || inputValue < -1){
        clueEle.innerHTML = 'El número debe estar entre 1 y 100';
    }
    }

    const triedEle = () =>{
        conunt++;
        triedEle.innerHTML = count;
    }

//eventos

function handleClickBtn(ev) {
    ev.preventDefault();
    
}

btn.addEventListener("click" , handleClickBtn)