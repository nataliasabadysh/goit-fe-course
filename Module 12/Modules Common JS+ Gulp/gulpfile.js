'use strict';
//
// const gulp = require('gulp'); // берет из node_modules
//
// gulp.task('default', function () {
//     console.log('Hello Gulp');
// });
//
//  // меннованый таск  в терменале  gulp greeting
// gulp.task('greeting', function () {
//     console.log('Welcom User !');
// });

//передадим массив вмето фан-и -callback перечислить задачи
// запискать такой такс будем только по gulp

//  по вызову gulp  выполнется несколько таксков
// const gulp = require('gulp'); // берет из node_modules
//
// gulp.task('default', ['greeting','user']); //
//
// gulp.task('greeting', function () { // greeting
//     console.log("Welcom User !");
// });
// gulp.task('user', function () {  // user
//     console.log("Welcom Natalia !");
// });
//
// // сделаем Таск на  копиии файлов

const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('concat',
    function () { // аргумант у таска фун-я которая делает задачу
        return gulp.src(
            './src/js/**/*.js'  // принемает файл
        )
            .pipe(
                concat('all.js')  // // этот  поток обработает и он переименнуюе файл который отдаст в all.js
            )
            .pipe(
                gulp.dest(
                    'build/js' //  // pipe - обрабатывает файл dest выбросит в папку готовый результат
                ));
    });

gulp.task('default', ['concat'] );  //  gulp вызываем задачу на работу

