/**
 * Created by zhangsanfeng on 2018/12/13.
 */

function test() {
    // for (let i = 0; i < 5; i++) {  //Uncaught ReferenceError: i is not defined
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.warn(i);
}
test();
//ES6自动开启严格模式 "use strict";

// let a = 1;  //Duplicate declaration "a"
// let a = 2;

const PI = 3.14159;  //定义常量，声明的时候必须赋值
// PI = 2;  //"PI" is read-only

const K = {phone: '13612345678'};
console.log(K);
K.phone = '183123455550';
console.log(K);
console.log('常量不能修改？笑话！对象是引用类型，就可以');