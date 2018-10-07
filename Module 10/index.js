'use strict';
  /*
    Написать приложение для работы с REST сервисом,
    все функции делают запрос и возвращают Promise
    с которым потом можно работать.
    Реализовать следующий функционал:
    - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
    - функция getUserById(id) - должна вернуть пользователя с переданным id.
    - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
    - функция removeUser(id) - должна удалять из БД юзера по указанному id.
    - функция updateUser(id, user) - должна обновлять данные пользователя по id.
      user это объект с новыми полями name и age.
    Документацию по бэкенду и пример использования прочитайте
    в документации https://github.com/trostinsky/users-api#users-api.
    Сделать минимальный графический интерфейс в виде панели с полями и кнопками.
    А так же панелью для вывода результатов операций с бэкендом.
*/


const refs = {
    userEditor : document.querySelector('.user-editor'),
    userNameEditorInput : document.querySelector('.user-name'),
    userAgeEditorInput : document.querySelector('.user-age'),
    userList : document.querySelector('.user-list'),
};

// READ
init();
function init(){
    fetch('https://test-users-api.herokuapp.com/users/')
        .then(response => response.json()
        .then(users => {
            const markup = users.data.reduce((acc, user) => acc + createUserMarkup(user), '',);
            refs.userList.insertAdjacentHTML('afterbegin', markup);
        })
)}

//Create new USER

refs.userAgeEditorInput.addEventListener('submit', handleUserEditorSubmit);
refs.userNameEditorInput.addEventListener('submit', handleUserEditorSubmit);
function handleUserEditorSubmit(e) {
    e.preventDefault();

    const name = refs.userNameEditorInput.value.trim();
    const age = refs.userAgeEditorInput.value.trim();

    if(name === '' || age === '')return alert("Нельзя добавить пустую заметку !");

    const userToAdd = { name,  age, };         //передаем навого user на B-end
    refs.userEditor.reset();

    fetch('https://test-users-api.herokuapp.com/users/', {
        method: 'POST',
        body: JSON.stringify(userToAdd),     // передали текст введеный пользователем на BD что бы create
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(newUser => {
        const markup = createUserMarkup(newUser);
        refs.userList.insertAdjacentHTML('afterbegin', markup);}
    )
}

// DELETE
refs.userList.addEventListener('click', handleUserListClick);

function handleUserListClick({ target }) {

    if(target.nodeName!== 'BUTTON') return;

    const action = target.dataset.action;
    switch (action) {
        case 'delete': deleteUser(target); break;
        case 'edit': console.log('Edit'); break;
        default: throw new Error('Unrecognized action type ' + action);
    }
}

function deleteUser ({ id }) {
        const user = target.closest('.user');             // .parentNode- выше по вложенности
        const userIdToDelete = Number(user.dataset.id);

        fetch(`https://test-users-api.herokuapp.com/users/${userIdToDelete}`,{
            method:'DELETE'
        }).then(response => {
            if(!response.ok) throw new Error('You can not delete!');
            user.remove();
        }).catch( err => console.log(err))
}

function createUserMarkup({ id, name,  age }) {
    return `
    <li class="user" data-id="${id}">
      <div class="actions">
        <button class="button" data-action="edit">Редактировать</button>
        <button class="button" data-action="delete">Удалить</button>
      </div>
      <span class="user-info__text">NAME:${name} </span>
      <span class="user-info__text">AGE: ${age}</span>
      </li> `;
}