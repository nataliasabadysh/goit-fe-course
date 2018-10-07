'use strict'

const page = document.querySelector('.page');
const openModalBtn = document.querySelector('button[data-action="js-open-modal"]');
const closeModalBtn = document.querySelector('button[data-action="close-modal"]');

openModalBtn.addEventListener('click', handleOpenModal);
function handleOpenModal() {
    //page.classList.add('show-modal');
    toggleModal();
    window.addEventListener('keydown', handleModalEscPress);
}
closeModalBtn.addEventListener('click', handleCloseModal);
function handleCloseModal() {
    //page.classList.remove('show-modal');
    toggleModal();
    window.removeEventListener('keydown', handleModalEscPress);
}
function handleModalEscPress(evt) {
    const key = evt.code;
    if(key === "Escape"){ handleCloseModal();}
}
function toggleModal() {
    page.classList.toggle('show-modal');
}



// const page = document.querySelector('.page');  // Наша страница <body class="page">
// const openModalBtn = document.querySelector('.js-open-modal'); // у нас есть класс  <button class="button js-open-modal">Open Modal</button>
// const closeModalBtn = document.querySelector('button[data-action="close-modal"]',); // <button class="button" data-action="close-modal">Close</button>
//
// openModalBtn.addEventListener('click', handleOpenModal);
// function handleOpenModal() {
//     page.classList.add('show-modal');      // Добовляем класс  к  <body class="page">  +  class="show-modal
// }
// closeModalBtn.addEventListener('click', handleCloseModal);
// function handleCloseModal() {
//     page.classList.remove('show-modal');
// }

// = 2

// const page = document.querySelector('.page');  // Наша страница <body class="page">

// const openModalBtn = document.querySelector('.js-open-modal');
// // у нас есть класс  <button class="button js-open-modal">Open Modal</button>
//
// const closeModalBtn = document.querySelector('button[data-action="close-modal"]',);
// // <button class="button" data-action="close-modal">Close</button>
//
// openModalBtn.addEventListener('click', handleOpenModal);
// closeModalBtn.addEventListener('click', handleCloseModal);
//
//
// function handleOpenModal() {
//     page.classList.add('show-modal');      // Добовляем класс  к  <body class="page">  +  class="show-modal
//     window.addEventListener('keydown', handleModalEscPress);
// // каждый раз при открытии окна добовляеться новый слушатель событий , при закрытии не пропалает слушатель
// }
//
// function handleCloseModal() {
//     page.classList.remove('show-modal');
//     window.removeEventListener('keydown', handleModalEscPress);  //при Escape и при закритие кнопкаой
// }
//
// function handleModalEscPress(evt) {
//     const key = evt.code;
//     if(key === "Escape"){// когда  Escape вызываем  закрытие мадол окна  handleCloseModal
//         // window.removeEventListener('keydown', handleModalEscPress);  // снимим  с нашей памяти - СОЗДАЕТСЯ УДАЛЯЕТЬСЯ .. здесь будет работать только при Escape
//         handleCloseModal();
//     }
// }

// -- 1
// function handleModalEscPress(evt) {
//     console.log(evt);
//     // произойдет событие клавиатуры
//     // KeyboardEvent {isTrusted: true, key: "Escape", code: "Escape", location: 0, ctrlKey: false, …}
//     const key = evt.code;  // при нажатии на  Escape
//     if (key === 'Escape') {
//         handleCloseModal();
//     }
// }

// ===   при нажалии на esc   вычеслим при помощи - keyCode  -- ОН УСТАРЕЛ ! НЕ  ИСПОЛЬЗОВАТЬ

// function handleModalEscPress(evt) {
//     console.log(evt);
//
//     const keyCode = evt.keyCode;
//     if(keyCode === 27){
//         console.log('esc pressed!') // esc pressed!
//     }
// }

// ===   при нажалии на esc   вычеслим при помощи - code   ! ИСПОЛЬЗОВАТЬ

// function handleModalEscPress(evt) {
//     console.log(evt); // KeyboardEvent {isTrusted: true, key: "Escape", code: "Escape", location: 0, ctrlKey: false, …}
//     const key = evt.code;
//
//     if(key === "Escape"){
//         console.log('esc pressed!') // esc pressed!
//     }
// }