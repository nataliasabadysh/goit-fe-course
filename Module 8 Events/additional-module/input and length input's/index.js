'use strict';
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все
  инпуты проверяли свое содержимое на правильное количество символов.

  Сколько символов должно быть в инпуте, указывается в атрибуте data-length.
  Если введено подходящее количество, то outline инпута становится зеленым,
  если неправильное - красным.
*/

let div = document.querySelector('.inputs');

div.addEventListener('change', handlerInputValid);

function handlerInputValid(ev){
    let event = ev.target;
    event.value.length === event.dataset.length ?
        event.style.outline = '1px green solid':
        event.style.outline = '1px red solid';
}