'use strict';
/*

http://api.linkpreview.net/?key=123456&q=https://www.google.com

key   5bbcb77be4ccc03e2e05daeebab05db85d5aa0a199255

API Response (JSON):

{
"title":"Google",
"description":"Search webpages, images, videos and more.",
"image":"https:\/\/www.google.com\/images\/logo.png",
"url":"https:\/\/www.google.com\/"
}

API Request (POST):
curl --data "key=123456&q=https://www.google.com" https://api.linkpreview.net

Response
Successful API response will be sent with HTTP status code 200 and it will contain application/json data.

title	        Website Title	Google
description	    Description Summary	Search webpages, images, videos and more.
image	        Preview Image	https://www.google.com/images/logo.png
url	            Destination URL	https://www.google.com


 */


//
// document.addEventListener('DOMContentLoaded', () => {
//     const refs = selectRefs();
//
//     const urlsArr = [
//         {
//             url: 'https://www.google.com.ua/',
//             img: 'http://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png',
//         },
//         {
//             url: 'https://rozetka.com.ua/',
//             img: 'https://i.rozetka.ua/favicons/apple-touch-icon-114x114.png',
//         },
//         {
//             url: 'https://www.windytv.com/',
//             img: 'https://www.windy.com/img/socialshare3.jpg',
//         },
//         {
//             url: 'https://stackoverflow.com/',
//             img:
//                 'https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon@2.png?v=73d79a89bded',
//         },
//         {
//             url: 'https://www.npmjs.com/',
//             img: 'https://static.npmjs.com/338e4905a2684ca96e08c7780fc68412.png',
//         },
//     ];
//     if (localStorage.length === 0) {addToLacalstorage(urlsArr);}
//     const localArr = getFromLacalstorage();
//
//     const template = Handlebars.compile(refs.source);
//     let markup = createMarkup(localArr);
//
//     refs.urlList.insertAdjacentHTML('afterbegin', markup);
//
//     refs.addBtn.addEventListener('click', handleAddCard);
//     refs.urlList.addEventListener('click', handleDeleteCard);
//
//     function handleDeleteCard(evt) {
//         evt.preventDefault();
//         var target = evt.target;
//
//         if (target.tagName === 'BUTTON') {
//             const targetUrl = target.previousSibling.textContent;
//             localStorage.removeItem(targetUrl)
//             target.parentNode.remove();
//         }
//     }
//
//     function handleAddCard(evt) {
//         evt.preventDefault();
//         const urlText = refs.urlEditorText.value.trim();
//         const api = {
//             baseUrl: `http://api.linkpreview.net/?key=5b9d4f1dbbabd453cad7c1485fc1be3731762b7f6c0b9&q=${urlText}`,
//             getInfo() {
//                 return fetch(this.baseUrl)
//                     .then(response => {
//                         if (response.ok) return response.json();
//                         console.log(this.baseUrl);
//
//                         throw new Error('Error while fetching ' + response.statusText);
//                     })
//                     .then()
//                     .catch(error => console.log(error));
//             }
//         };
//
//         const pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
//         const isValid = pattern.test(urlText);
//
//         if (!isValid) {
//             alert('Url-адрес не валидный');
//             return;
//         }
//
//         const res = urlsArr.find(obj => obj.url === urlText);
//         if (res !== undefined) {
//             alert('Такая закладка уже есть!!!');
//             return;
//         }
//
//         api.getInfo().then(data => {
//             const u = { url: urlText, img: data.image };
//             urlsArr.push(u);
//             const jsonObj = JSON.stringify(u);
//             localStorage.setItem(`${urlText}`, jsonObj);
//             markup = template(u);
//             refs.urlList.insertAdjacentHTML('afterbegin', markup);
//         });
//
//         refs.form.reset();
//     }
//
//     function selectRefs() {
//         const refs = {};
//         refs.form = document.querySelector('.url-editor');
//         refs.urlEditorText = refs.form.querySelector('.url-editor__text');
//         refs.addBtn = refs.form.querySelector('.url-editor__button');
//         refs.urlList = document.querySelector('.url-list');
//         refs.rmBtn = refs.urlList.querySelector('.url-item__button');
//         refs.source = document.querySelector('#card').innerHTML.trim();
//
//         return refs;
//     }
//
//     function createMarkup(arr) {
//         const markup = arr.reduce((acc, laptop) => acc + template(laptop), '');
//         return markup;
//     }
//
//     function addToLacalstorage(arr) {
//         arr.forEach(el => {
//             const jsonObj = JSON.stringify(el);
//             localStorage.setItem(`${el.url}`, jsonObj);
//         });
//     }
//
//     function getFromLacalstorage() {
//         const localArr = [];
//         for (var i = 0, len = localStorage.length; i < len; ++i) {
//             const gеtKey = localStorage.key(i);
//             const getObj = JSON.parse(localStorage.getItem(gеtKey));
//             const u = { url: gеtKey, img: getObj.img };
//             localArr.push(u);
//         }
//         return localArr;
//     }
// });