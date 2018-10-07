'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const panels = document.querySelector('.js-tabs__nav');

  const links = document.querySelectorAll('.tabs__link');

  const tabsPane = document.querySelectorAll('.tabs__pane');
  
  panels.addEventListener('click', switchPanel);

  function switchPanel({target}) {
    event.preventDefault();
    const nodeName = target.nodeName;

    if(nodeName !== 'A') return;

    for(let i = 0; i < 3; i++){
        if(links[i] !== target){
            links[i].classList.remove('tabs__link--active');
            tabsPane[i].classList.remove('tabs__pane--active');
        } else {
            links[i].classList.add('tabs__link--active');
            tabsPane[i].classList.add('tabs__pane--active');
        }
    }
  }
});
