'use strict';

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.

  Напишите скрипт который реализует следующее поведение:

  - При клике на кнопке с надписью "Open Modal"
    и классом js-open-modal, модальное окно с классом modal,
    должно появляться, тобишь необходимо убрать класс modal-hidden.
    Для выбора модального модального окна используйте класс js-modal-backdrop

  - При открытом модальном окне, клик на кнопку с крестиком (js-close-modal)
    или на серый фон с прозрачностью (js-modal-backdrop),
    модальное окно должно закрываться.


  Задание повышеной сложности:
  - Попробуйте реализовать плагин функционала модального окна используя класс.
    При создании экземпляра необходимо передать селекторы для кнопки закрытия окна
    и самого прозрачного фона. Плагин должен реализовавать два метода show и hide,
    либо один toggle.

    При клике на кнопку показа модального окна должен вызываться
    метод show или toggle. Соответственно при для закрытия
    окна hide либо toggle.
*/

const openButton = document.querySelector('.js-open-modal');
const modalWindow = document.querySelector('.js-modal-backdrop');
const buttonCloseModal = document.querySelector('.js-close-modal');

openButton.addEventListener('click', showModalWindow);
buttonCloseModal.addEventListener('click', closeModal);

modalWindow.addEventListener('click', closeModal);

function closeModal(event) {
  if(this !== event.target) return;
  modalWindow.classList.add('modal-hidden');
}

function showModalWindow() {
  modalWindow.classList.remove('modal-hidden');
}