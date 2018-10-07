'use strict';

let list = document.querySelector('.list');

list.addEventListener('click', handlerDeletItems);

function handlerDeletItems(ev){
    if(ev.target.nodeName !== 'BUTTON')return;
    let parent = ev.target.parentNode;
    parent.remove()
}