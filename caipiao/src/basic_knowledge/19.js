/**
 * Created by zhangsanfeng on 2018/12/13.
 */

console.log('--------------------------19、模块化Module------------------------');

import {A, test, Hello} from './19.1.js';
console.log(A);
test();
(new Hello).test();

// import * as lesson from './19.1.js';
// console.log(lesson.A);
// lesson.test();
// (new lesson.Hello).test();

import lesson19 from './19.2.js';
console.log(lesson19.A);
lesson19.test();
(new lesson19.Hello).test();