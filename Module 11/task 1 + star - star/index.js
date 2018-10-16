'use strict';
/*
  Создайте шаблон поста указаного во вкладке HTML.
  Отрендерите список постов в DOM по данным из массива posts.

  Если в объекте поле isFav=true, в посте должна быть
  разметка иконки избранного поста, в противном случае
  разметки иконки быть не должно.

  Используйте эту иконку для фона:
  https://image.flaticon.com/icons/svg/290/290413.svg
*/

const posts = [
    { title: "ReciteThis", text: "This free app offers a lot of options to customize your quote image, font styles, and color schemes. ", isFav: true , img:"https://image.flaticon.com/icons/svg/290/290413.svg"},
    { title: "Word Swag", text: "This free app offers a lot of options to customize your quote image, font styles, and color schemes. ", isFav: false, img:"https://image.flaticon.com/icons/svg/290/290413.svg"},
    { title: "InstaQuote", text: "This free app offers a lot of options to customize your quote image, font styles, and color schemes. ", isFav: true, img:"https://image.flaticon.com/icons/svg/290/290413.svg" },
    { title: "Text2Pic", text: "This free app offers a lot of options to customize your quote image, font styles, and color schemes. ", isFav: false, img:"https://image.flaticon.com/icons/svg/290/290413.svg"}
];


const cards = document.querySelector('.cards');
const source = document.querySelector('.tepmlate-list').innerHTML.trim();
const template = Handlebars.compile(source);

const markup = posts.reduce((acc, card) => acc + template(card), '');
cards.insertAdjacentHTML('afterbegin', markup);