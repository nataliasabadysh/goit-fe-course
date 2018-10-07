'use strict';

/*
  Напишите скрипт который:

    - При фокусе текстового поля, в консоль выводит строку "Input is in focus!"
    - При наборе текста в текстовое поле (событие input), текущее его значение должно
      отображаться в абзаце с классом input-value
*/

let input = document.querySelector('.input');
let p = input.nextElementSibling;

input.addEventListener('focus', handlerInputFocus)
function handlerInputFocus(){
    console.log("Input is in focus!");
}

input.addEventListener('input', handlerInputValue)
function handlerInputValue(ev){
    let value = ev.target.value;
    p.textContent = `Current input value:${value}`
}