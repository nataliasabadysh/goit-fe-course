const msg = 'Hey there i am second fun';

exports.hello = function () {
    console.log(msg);
};

// exprot from node_modeles

exports.world= function (msg) {
    console.log(msg);
};

const hello = require('./hello');
//world.hello();   //  'Hey there i am second fun';

// exprot from node_modeles  - НЕ указываем путь

const data = require("text"); //

// что мы импортируем

// в node_modeles    ->   exports.text = "Hello this is text fron node_modules folder";
// exports.text - data.text -к text свойству


//hello.world(data); // { text: 'Hello this is text fron node_modules folder' }
hello.world(data.text); //  Hello this is text fron node_modules folder

