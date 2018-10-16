'use strict';
/*
  Напишите функцию validate которая проверяет поля формы
  firstname и lastname и возвращает результат в виде
  обьекта со свойствами 'first name' и 'last name'.

  Кроме того, формат объекта: в свойства записывается буль-флаг
  уведомляющий о статусе прохождения валидации для каждого поля.
  {
    'first name': true или false,
    'last name': true или false,
  }

  Критерии валидации:
  1)Имя. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.

  2)Фамилия. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.

  При клике на кнопку submit должна происходить проверка.
  Результат проверки, объект, выводить в консоль.

  https://codepen.io/NatashaSabadyshFD/pen/bmEoqV?editors=1011
*/

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", validate);

function validate(evt) {
    evt.preventDefault();
    const Inpetname = firstname.value;
    const InputSecondName = lastname.value;
    let obj = { first_name: Inpetname, last_name: InputSecondName, };
    console.log(obj);

//   Object {
//   first_name: "Natalia",
//   last_name: "Sabadysh"
// }

    const markup = obj.reduce((acc, dish) => acc + template(dish), '');

    // show name
    const resultList  = document.querySelector('.results');
    resultList.insertAdjacentHTML('afterbegin', markup);
}
