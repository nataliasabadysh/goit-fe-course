'use strict';
/*

 Object.assign(target, …sources)
Метод Object.assign ()
используется для копирования значений всех перечислимых собственных свойств
из одного или нескольких исходных объектов в целевой объект.
Он вернет целевой объект.

- Object.assign(target, …sources)
target - это целевой  объект  - Default
…sources - внешние обькты  - все что зайдет из вне будут перезаписывать первый targetобькт , в случае если поля совпали

 */

const ann = {
    name: 'Anna',
};

const users = {
    name : 'Alex',
    age : 25,
};
const res3 = Object.assign(users, ann);

console.log(res3);          // {name: "Anna", age: 25}
console.log(res3.name);     // Anna
console.log(res3.age);      // 25
