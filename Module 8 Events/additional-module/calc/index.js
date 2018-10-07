'use strict';

/*
  Даны delete on click инпута, абзац и кнопка. По нажатию на кнопку
  получите числа стоящие в инпутах и запишите их сумму в абзац.
*/

let form = document.querySelector('.calc');
let input = form.querySelectorAll('input');
let result = form.querySelector('.result');

form.addEventListener('click', handlerBtnClick);

function handlerBtnClick(ev){
    if(ev.target.nodeName !== "BUTTON")return;
    let summ = 0;
    for (let rest of input){
        summ += Number(rest.value)
    }
    result.innerHTML = summ
}