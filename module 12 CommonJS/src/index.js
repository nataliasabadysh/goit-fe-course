
const moduleA = require("../module-a");

console.log("Module A :", moduleA);// Module A : { str: ' Hello I am module A ' }
console.log(moduleA.str); //  Hello I am module A


const moduleB = require("../module-b");

console.log("Module B :", moduleB); // Module B : { str: 'Hey there I am module B' }
console.log(moduleB.str);// Hey there I am module B


const uuid = require("uuid");  // путь к поти
console.log(uuid);     // { [Function: v4] v1: [Function: v1], v4: [Circular] }
console.log(uuid.v4());  // 90db4349-de72-4ce4-bea2-4e8dbc982bbb

const logger = () => console.log(message);

logger('Hello');



const human = new Human('poly');
human.getName();

const x= [1, 2, 3, 4].reduce((acc, item)=>  acc + item,0 );
console.log(x);


// Деструктуризация
const [a, b] = [1, 2];

// var a = 1,
//     b = 2;



// const uuid = require(“uuid");   -  from node_modules  - абсолютный путь
// const moduleA = require( “./module-a" );   - относительный путь

// заменяет
// <script src = "js/module-a.js">
// <script src = "js/module-b.js">