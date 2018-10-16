'use strict';
/*
использованием автономного интерфейса объекта.

Иногда вы не просто хотите использовать глобальные переменные, но хотите их объявить.
 Мы можем легко сделать это, экспортируя их, используя возвращаемое значение анонимной функции.
 Это позволит создать шаблон модуля для использования вне анонимной функции.
 */

const GRADES_MODULE = (function() {
    // Это будет приватная переменная внутри замыкания
    const grades = [80, 45, 75, 64, 53, 82];

    return {
        average() {
            const total = grades.reduce((acc, grade) => acc + grade, 0);

            return `Average grade is ${Math.round(total / grades.length)}.`;
        }
    };
})();

console.log(GRADES_MODULE.average()); // Average grade is 67.