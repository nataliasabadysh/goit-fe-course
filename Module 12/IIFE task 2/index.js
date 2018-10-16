'use strict';
/*
I I F E - самовызывающая фун-я
без имени Анонимная
Один раз вызвали - оноразовая - вернет результат
после того как она выполнелась к ней уже нельзя обратиться снова
*/

// 1

let x = 5;

(function () {
    let x = 10;
    let y = 20;

    console.log(x);  // 10
    console.log(y);  // 20
})();

console.log(x);  // 5

// будет ошибка, y не объявлена в доступной области видимости
console.log(y); // Uncaught ReferenceError, y is not defined

// 2 Присвоение IIFEв переменную запишет не саму функцию а результат ее выполнения, это часто используют для модульности кода, эту тему мы будем разбирать дальше в курсе.

const result2 = (function () {
    const value = 10;
    return value + 5;
})();

console.log(result2); // 15

// 3 В IIFE можно также передавать аргументы.

const result3 = (function (a, b) {
    const value = 10;
    return a + b + value;
})(1, 2);

console.log(result3); // 13
