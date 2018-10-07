'use strict';
let menu = document.querySelector('.menu');
menu.addEventListener('click', handlerActiveLink);

function handlerActiveLink(ev){
    let event = ev.target;
    if(event.nodeName !== 'A')return;

    let link = menu.querySelectorAll('.menu-link');
    for(let active of link){
        if(active !== event){
            active.classList.remove('menu-link-active')
        }event.classList.add('menu-link-active')
    }
    event.preventDefault()
}