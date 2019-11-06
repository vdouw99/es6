/**
 * Created by sf on 2017/12/23.
 */

// 3、变量的解析赋值
console.log('\n\n');
console.log('---------------------------------------');
console.log('------ 03、变量的解析赋值（开始）-----------');
console.log('---------------------------------------');

let obj = {first: 'hello', last: 'world'};
let {first:f, last:l} = obj;
console.log(f + "|" + l);
let {first:first, last:last}=obj;
console.log(first + "|" + last);
console.log('“let {first:first, last:last}=obj;”简写就变成了\n“let {fist,last}=obj;”');

const [a,b,c,d,e,f1,g,h] = '字符串的解构赋值';
console.log(a + "|" + b + "|" + c + "|" + d + "|" + e + "|" + f1 + "|" + g + "|" + h);

// 函数参数的解构赋值
function add([x,y]) {
  return x + y;
}
console.log(add([55, 66]));

console.log('---变量的解构赋值的用途：---------');

console.log('---1、交换变量的值---------');
let x1 = '变换变量的值1';
let x2 = '变换变量的值2';
let x3 = '变换变量的值3';
let [y1, y2, y3] = [x1, x2, x3];
[x2, x1] = [x1, x2];
console.log('x1:' + x1);
console.log('x2:' + x2);
console.log('x3:' + x3);
console.log('y1:' + y1);
console.log('y2:' + y2);
console.log('y3:' + y3);

console.log('---2、从函数返回多个值---------');
//从函数返回多个值(返回数组)
function exampleArray() {
  return [1, 2, 3];
}
let [a6, b6, c6] = exampleArray();
console.log(a6 + "|" + b6 + "|" + c6);
console.log('函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。');
console.log('有了解构赋值，取出这些值就非常方便。');

//从函数返回多个值(返回对象)
function exampleFun() {
  return {
    foo: 1,
    bar: 2
  };
}
let {foo, bar} = exampleFun();
console.log(foo + "|" + bar);

console.log('---3、函数的参数定义---------');
console.log('解构赋值可以方便地将一组参数与变量名对应起来。');
function ff([x,y,z]) {
  return x + y * z;
}
console.log(ff([7, 6, 2]));

console.log('---4、提取JSON---------');
let jsonData = {id: 43, status: "OK", data: [123, 456]};
let {id, status, data:number} = jsonData;
console.log(id + "|" + status + "|" + number);

console.log('---5、函数的参数默认值---------');
jQuery.ajax = function (url, {
    async = true,
    beforeSend = function () {
    },
    cache = true,
    complete = function () {
    },
    crossDomain = false,
    global = true
    // ... more config
}) {
  // ... do stuff
}

console.log('---6、遍历Map结构---------');
// const map111 = new Map();
// map111.set('first', 'hello');
// map111.set('second', 'world');
// for (let [k1,v1] of map111) {
//     console.log(k1 + " is " + v1);
// }

console.log('---7、输入模块的指定方法---------');
console.log('加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。');
console.log("import {mapState, mapActions} from 'vuex'");

console.log('---------------------------------------');
console.log('------ 03、变量的解析赋值（结束）-----------');
console.log('---------------------------------------');
