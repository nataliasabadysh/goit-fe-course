'use strict';
/*
  Дан спан и кнопки +input shows value, -input shows value, которые будут увеличивать
  и уменьшать на input shows value значение спана. Сделайте так, чтобы
  это значение не могло стать меньше нуля.
*/

let btn = document.querySelectorAll('.btn');
let value = document.querySelector('.value');

function clic(arr){
    arr[0].addEventListener('click',handlerBtnClick );
    arr[1].addEventListener('click',handlerBtnClick );
    function handlerBtnClick(ev){
        if(ev.target.classList[1] !== "js-sub") { return value.textContent = +value.textContent +1 }
        if(value.textContent > 0){ value.textContent -= 1}
    }
}
clic(btn);