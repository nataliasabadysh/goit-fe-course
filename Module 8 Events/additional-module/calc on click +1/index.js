'use strict';

document.addEventListener('DOMContentLoaded', () => {

// ===(calc)

// const image = document.querySelector('.img');

// image.addEventListener('click', changeAttribute);
// image.addEventListener('click', showImgeLink);

// function showImgeLink() {
//     alert(image.src);
// }

// function changeAttribute() {
//   image.setAttribute('alt', 'Image has been clicked on!');
// }

// const link = document.querySelector('.link');

// link.addEventListener('click', showLink);
// link.addEventListener('click', switchOfActiveLink);

// function showLink({target}){
//     alert(target.href);
// }

// function switchOfActiveLink(event) {
//   event.preventDefault();
//   const hasActive = link.classList.contains('link-active');
//   if(hasActive){
//     link.classList.remove('link-active');
//   } else {
//     link.classList.add('link-active'); 
//   }
// }


// const input = document.querySelector('.js-input');
// const text = document.querySelector('.js-input-value');

// input.addEventListener('focus', showFocus);

// function showFocus() {
//     console.log('Input is in focus!');
// }


// ==========(delete on click)
// const openButton = document.querySelector('.js-open-modal');
// const modalWindow = document.querySelector('.js-modal-backdrop');
// const buttonCloseModal = document.querySelector('.js-close-modal');

// openButton.addEventListener('click', showModalWindow);
// buttonCloseModal.addEventListener('click', closeModal);
// modalWindow.addEventListener('click', closeModal);

// function closeModal(event) {
//   if(this !== event.target) return;
//   modalWindow.classList.add('modal-hidden');
// }

// function showModalWindow() {
//   modalWindow.classList.remove('modal-hidden');
// }

// ============(click on img + alert)
// const menu = document.querySelector('.js-menu');
// const links = menu.querySelectorAll('.menu-link');
// menu.addEventListener('click', handleMenuClick);

// function handleMenuClick({target}) {
//   const nodeName = target.nodeName;

//   event.preventDefault();

//   if(nodeName !== 'A') return;

//   links.forEach(link => {
//       if(link !== target){
//           link.classList.remove('menu-link-active');
//       } else {
//           link.classList.add('menu-link-active');
//       }
//   });
// }

// =====================(on + on - calc)
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
