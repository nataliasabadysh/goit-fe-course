'use strict';
/*
I I F E - самовызывающая фун-я
без имени Анонимная
Один раз вызвали - оноразовая - вернет результат
после того как она выполнелась к ней уже нельзя обратиться снова
*/

(function (a, b) {
    console.log(a + b);

}(2, 4)); // 6

// - ( )
// + array
// + return

const res  = function (a, b) {
    return a + b;
}(2, 4); // 6
console.log(res);

// передадим обьект-

(function (userSetting) {
    console.log(userSetting.name);
}({ name: "Anna"})); //Anna

// 1
(function (userSetting) {
    const defaultSetting  = { data };
    const setting  = userSetting  ? Object.assign ( defaultSetting,  userSetting)
        : defaultSetting;
})(userSetting);

// 2
const res5 = (
    function(userSetting) {
        const defaultSetting = {name: "Homer" };
        const setting  = userSetting
            ? Object.assign(defaultSetting, userSetting)
            : defaultSetting;
        return setting;
    })({ name: "Bart" });

console.log(res5.name);

// Пример записи lodash - библиотека
// const _=(function (a,b) {
// }(this));
// _. // вызываем быблиотеку
