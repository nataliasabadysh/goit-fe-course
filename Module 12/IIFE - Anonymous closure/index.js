'use strict';
/*
Anonymous closure- первый способ записи Pattern
анонимное замыкание.
Это поможет нам достичь нашей цели, поместив весь наш код в анонимную функцию.

С помощью этой конструкции наша анонимная функция имеет собственное замыкание.
Это позволяет нам скрыть переменные из родительского (глобального) пространства имен.

Что хорошо в этом подходе, так это то, что вы можете использовать локальные переменные внутри этой функции,
случайно не перезаписывая существующие глобальные переменные,
но все же обращаясь к глобальным переменным.
 */

const globalVar = 'I am a global variable!';

(function() {
    // Переменные и методы внутри будут приватными

    const grades = [80, 45, 75, 64, 53, 82];

    const average = () => {
        const total = grades.reduce((acc, grade) => acc + grade, 0);

        return `Аverage grade is ${Math.round(total / grades.length)}.`;
    };

    console.log(average()); // Average grade is 67
    console.log(globalVar); // I am a global variable!
})();


console.log(average()); // average is not defined