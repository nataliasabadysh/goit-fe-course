'use strict';
/*
Наверное один из наиболее частоиспользующихся паттернов.
 Он очень похож на вышеупомянутый подход Object interface,
 за исключением того, что гарантирует,
 что все методы и переменные остаются закрытыми до явного использования.


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