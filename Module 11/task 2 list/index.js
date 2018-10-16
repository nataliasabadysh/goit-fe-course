'use strict';
/*
  Создайте шаблон списка указаного во вкладке HTML.
  Отрендерите список в DOM по данным из массива listItems.
*/

const listItems = [
    { name: 'MackBook Air 2015', count: 2 },
    { name: 'MackBook Pro 2016', count: 4 },
    { name: 'MackBook 2017', count: 12 },
    { name: 'MacBook Touchpad pro 2017', count: 29 },
];

const source = document.querySelector('.list-tem').innerHTML.trim();

const template = Handlebars.compile(source);
const markup = template(listItems);

const parent = document.querySelector('#list-item');
parent.insertAdjacentHTML('afterbegin', markup);