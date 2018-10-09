
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

/*
GET https://test-users-api.herokuapp.com/users/
Show your all created users. No parameters.
 */

const API_URL = 'https://test-users-api.herokuapp.com/users/';

const refs = {
    userEditor : document.querySelector('.user-editor'),

    userNameEditorInput : document.querySelector('.user-name'),
    userAgeEditorInput : document.querySelector('.user-age'),
    userList : document.querySelector('.user-list'),

    // to update
    modalBackdrop : document.querySelector('.backdrop'),
    modal : document.querySelector('.modal'), // мы повесим слушателя
    modalNameInput : document.querySelector('.user-name'),
    modalAgeInput : document.querySelector('.user-age'),

};

// состояние приложения
const state = {
    selectedId : null, // update User
};

// READ - Show your all created users

init();
function init(){
    fetch(API_URL)
        .then(response => response.json()
            .then(users => { // [ {..},{..},{..}]
                const markup = users.data.reduce((acc, user) => acc + createUserMarkup(user), '',);
                /*
                console.log(markup); // user

                <li class="user"  data-id="5bb88ae39e16030014a30b85"  >  -- id
                    <div class="actions">
                        <button class="button" data-action="edit">Редактировать</button>
                        <button class="button" data-action="delete">Удалить</button>
                    </div>
                    <span class="user-info__text">NAME:lena </span>
                    <span class="user-info__text">AGE: 50</span>
                </li>   --  вставим в userList  */
                refs.userList.insertAdjacentHTML('afterbegin', markup);
            })
        )}




// //Create new USER

refs.userEditor.addEventListener('submit', handleUserEditorSubmit);

function handleUserEditorSubmit(e) {
    e.preventDefault();

    // input
    const name = refs.userNameEditorInput.value.trim();
    const age = refs.userAgeEditorInput.value.trim();

    if(name === '' || age === '')return alert("Нельзя добавить пустую заметку !");

    const userToAdd = { name,  age };
    refs.userEditor.reset();

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(userToAdd),   // передали текст введеный пользователем на BD что бы create
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(newUser => {
            const markup = createUserMarkup(newUser.data);
            refs.userList.insertAdjacentHTML('afterbegin', markup);}
        )
}

// DELETE

refs.userList.addEventListener('click', handleUserListClick);

function handleUserListClick({ target }) {

    if (target.nodeName !== 'BUTTON') return;

    const action = target.dataset.action;
    // console.log(action);
    switch (action) {
        case 'delete':  deleteUser(target); break;
        case 'edit': updateUser(target); break;
        default: throw new Error('Unrecognized action type ' + action);
    }
}

function deleteUser (target) {
    const user = target.closest('.user');
    const userIdToDelete = user.dataset.id;
    fetch(`https://test-users-api.herokuapp.com/users/${userIdToDelete}`,{
        method:'DELETE'})
        .then(response => {
            if(!response.ok) throw new Error('You can not delete!');
            user.remove();
        }).catch( err => console.log(err))
}

// EDIT USER DETAILS

refs.modal.addEventListener('click', handelModalClick);

function handelModalClick({ target }) {

    const action = target.dataset.action;
    switch (action) {
        case 'save': saveUser(); break;
        case 'close': toggleModal(); break;
        default: throw new Error('Unrecognized action type ' + action);
    }
}

function updateUser(target) {  // --- ?
    const user = target.closest('.user');
    const userIdToUpdate = user.dataset.id;


    state.selectedId = userIdToUpdate; // selectedId = id

    const userName = user.querySelector('.user-info__name').textContent;
    const userAge = user.querySelector('.user-info__age').textContent;

    refs.modalNameInput.value = userName;
    refs.modalAgeInput.value = userAge;

    toggleModal();

}
function saveUser() {  // --- ?

    const updatedUserName = refs.modalNameInput.value;
    const updatedUserAge = refs.modalAgeInput.value;

    const userIdToUpdate = state.selectedId;

    // то что хотим изменить

    const userToUpdate = {
        name: refs.modalNameInput.value,
        age: refs.modalAgeInput.value,
    };
    fetch(`${API_URL}/${userIdToUpdate}`, {
        method: 'PATCH',
        body: JSON.stringify(userToUpdate),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(updateUser => {

            const userNameEl = refs.userList.querySelector(`.user[data-id="${updatedUser.data.id}"] .user-info__name`,); // .user-info__name - ссылка на абзац
            const userAgeEl = refs.userList.querySelector(`.user[data-id="${updatedUser.data.id}"] .user-info__age`,);

            userNameEl.textContent = updatedUser.data.name;
            userAgeEl.textContent = updatedUser.data.age;

            toggleModal();
        })

}


function toggleModal() {
    refs.modalBackdrop.classList.toggle('is-visible');
}
function createUserMarkup({ id, name,  age }) {
    return `
    <li class="user" data-id="${id}">
      <div class="actions">
        <button class="button" data-action="edit">Редактировать</button>
        <button class="button" data-action="delete">Удалить</button>
      </div>
          <img src="img/user.jpg" alt="" width="50" height="50">
      <span class="user-info__name">NAME:${name} </span>
      <span class="user-info__age">AGE: ${age}</span>
      </li> `;
}








// 'use strict';
//   /*
//     Написать приложение для работы с REST сервисом,
//     все функции делают запрос и возвращают Promise
//     с которым потом можно работать.
//     Реализовать следующий функционал:
//     - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
//     - функция getUserById(id) - должна вернуть пользователя с переданным id.
//     - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
//     - функция removeUser(id) - должна удалять из БД юзера по указанному id.
//     - функция updateUser(id, user) - должна обновлять данные пользователя по id.
//       user это объект с новыми полями name и age.
//     Документацию по бэкенду и пример использования прочитайте
//     в документации https://github.com/trostinsky/users-api#users-api.
//     Сделать минимальный графический интерфейс в виде панели с полями и кнопками.
//     А так же панелью для вывода результатов операций с бэкендом.
// */
//
// /*
// You have few endpoints:
//
// GET https://test-users-api.herokuapp.com/users/
// Show your all created users. No parameters.
//  */
//
// const API_URL = 'https://test-users-api.herokuapp.com/users/';
//
// const refs = {
//     userEditor : document.querySelector('.user-editor'),
//
//     userNameEditorInput : document.querySelector('.user-name'),
//     userAgeEditorInput : document.querySelector('.user-age'),
//     userList : document.querySelector('.user-list'),
//
//     // to update
//     modalBackdrop : document.querySelector('.backdrop'),
//     modal : document.querySelector('.modal'), // мы повесим слушателя
//     modalNameInput : document.querySelector('.user-name'),
//     modalAgeInput : document.querySelector('.user-age'),
//
// };
//
// // READ - Show your all created users
//
// init();
// function init(){
//     fetch(API_URL)
//         .then(response => response.json()
//         .then(users => { // [ {..},{..},{..}]
//             const markup = users.data.reduce((acc, user) => acc + createUserMarkup(user), '',);
// /*
// console.log(markup); // user
//
// <li class="user"  data-id="5bb88ae39e16030014a30b85"  >  -- id
//     <div class="actions">
//         <button class="button" data-action="edit">Редактировать</button>
//         <button class="button" data-action="delete">Удалить</button>
//     </div>
//     <span class="user-info__text">NAME:lena </span>
//     <span class="user-info__text">AGE: 50</span>
// </li>   --  вставим в userList  */
//             refs.userList.insertAdjacentHTML('afterbegin', markup);
//         })
// )}
//
//
//
//
// // //Create new USER
//
// refs.userEditor.addEventListener('submit', handleUserEditorSubmit);
// //refs.userNameEditorInput.addEventListener('submit', handleUserEditorSubmit);
//
// function handleUserEditorSubmit(e) {
//     e.preventDefault();
//
//     // input
//     const name = refs.userNameEditorInput.value.trim();
//     const age = refs.userAgeEditorInput.value.trim();
//
//     if(name === '' || age === '')return alert("Нельзя добавить пустую заметку !");
//
//     //if(name !== String && age !== Number )return alert("В поле введены некорректные данные");
//
//     const userToAdd = { name,  age };         //передаем навого user на B-end
//     refs.userEditor.reset();
//    // console.log(userToAdd);    //name - то что введем ,  age- то что введем
//
//     fetch(API_URL, {
//         method: 'POST',
//         body: JSON.stringify(userToAdd),   // передали текст введеный пользователем на BD что бы create
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         }
//     })
//     .then(response => response.json())
//     .then(newUser => {
//         const markup = createUserMarkup(newUser.data);
//        // console.log(newUser.data);  // name .. age.. id..
//         refs.userList.insertAdjacentHTML('afterbegin', markup);}
//     )
// }
//
// // DELETE
//
// refs.userList.addEventListener('click', handleUserListClick);
//
// function handleUserListClick({ target }) {
// // targrt - это то по чем мы кликаем ТО по чем мы хотим изменять что либо
//
// // handleUserListClick  event.target <button... > Edit
//
//     //console.log(target);  + click on butt <button... > Edit
//
//     if (target.nodeName !== 'BUTTON') return;
//
//     const action = target.dataset.action; //  delete / edit
//     // console.log(action);
//     switch (action) {
//         case 'delete':  deleteUser(target); break; // console.log('del');
//         case 'edit': updateUser(target); break;  // console.log('Edit')
//         default: throw new Error('Unrecognized action type ' + action);
//     }
// }
//
// function deleteUser (target) {
//     // targer = butun а нам нужно удалить всего li closest
//         const user = target.closest('.user'); // или  .parentNode- выше по вложенности
//       //  console.log(user);
//         const userIdToDelete = user.dataset.id;
//       //  console.log(userIdToDelete);       // 5bb9b917572b1f0014665ab1      - id
//         fetch(`https://test-users-api.herokuapp.com/users/${userIdToDelete}`,{
//             method:'DELETE'})
//             .then(response => {
//             if(!response.ok) throw new Error('You can not delete!'); // console.log(user); <li>
//              // console.log(user); // li
//             user.remove();
//             }).catch( err => console.log(err))
// }
//
//
// // Update User
// refs.modal.addEventListener('click', handelModalClick);
//
// function handelModalClick({ target }) { // event.target
//
//     const action = target.dataset.action; //  delete / edit
//
//     switch (action) {
//
//         case 'save':
//             console.log('Save!!!');
//             break; // console.log('del');
//
//         case 'close':
//             toggleModal();
//             break;  // console.log('Edit')
//         default: throw new Error('Unrecognized action type ' + action);
//     }
//
// }
//
// function updateUser(target) {
//     // targer = butun а нам нужно удалить всего li closest
//     const user = target.closest('.user'); // или  .parentNode- выше по вложенности
//     //  console.log(user);
//     const userIdToUpdate = user.dataset.id; // id - to update
//
//     const userName = user.querySelector('.user-info__name').textContent;
//     console.log(userName); // name: Name
//    // const userAge = user.querySelector('.user-info__age').textContent;
//
//       refs.modalNameInput.value = userName;
//     // refs.modalAgeInput.value = userAge;
//
//     toggleModal();
//
// }
// function toggleModal() {
//     refs.modalBackdrop.classList.toggle('is-visible');
// }
// function createUserMarkup({ id, name,  age }) {
//     return `
//     <li class="user" data-id="${id}">
//       <div class="actions">
//         <button class="button" data-action="edit">Редактировать</button>
//         <button class="button" data-action="delete">Удалить</button>
//       </div>
//           <img src="img/user.jpg" alt="" width="50" height="50">
//       <span class="user-info__name">NAME:${name} </span>
//       <span class="user-info__age">AGE: ${age}</span>
//       </li> `;
// }

