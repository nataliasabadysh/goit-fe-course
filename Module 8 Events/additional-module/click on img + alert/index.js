'use strict';

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку
  алертом выводился ее src. Используйте делегирование.
*/

let list  = document.querySelector('.images');

list.addEventListener('click', handlerImg);

function handlerImg(ev){
    ev.target.nodeName === "IMG"? alert(ev.target.alt): null;
}
