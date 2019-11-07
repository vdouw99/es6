/**
 * Created by sf on 2017/12/23.
 */

// 09、对象的扩展
console.log('\n\n');
console.log('---------------------------------------');
console.log('------ 09、对象的扩展（开始）-----------');
console.log('---------------------------------------');


console.log('--- 1、属性的简洁表示法 ---------');
console.log('ES6允许直接写入变量和函数，作为对象的属性和方法');
function f(x, y) {
  return {x, y};
}
console.log(f('x', 'y'));   // {x: "x", y: "y"}

console.log('--- 2、属性名表达式 ---------');
let lastWord = 'last word';
const a = {
  'first': 'hello',
  [lastWord]: 'world'
};
console.log(a);  // {first: "hello", last word: "world"}

console.log('--- 3、方法的name属性 ---------');
console.log(f.name);  // f

console.log('--- 4、Object.js() ---------');
console.log('它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。');
console.log(Object.is(4, '4'));  //false

console.log('--- 5、Object.assign() ---------');
console.log('用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）');
const t1 = {a: 1};
const t2 = {b: 2};
const t3 = {c: 3};
Object.assign(t1, t2, t3);
console.log(t1);  // {a: 1, b: 2, c: 3}
console.log(t2);  // {b: 2}
console.log(t3);  // {c: 3}
console.log('作用1：为对象添加属性');
class Point {
  constructor(x, y) {
    Object.assign(this, {x, y});
  }
}
console.log('作用2：为对象添加方法');
var someClass = {};
Object.assign(someClass, {
  someMethod(arg1, arg2){
    console.log(arg1 + arg2);
  }
});
console.log(someClass);
someClass.someMethod(22, 33);
console.log('作用3：克隆对象');
function clone1(origin) {
  return Object.assign({}, origin);
}
var newObj = clone1(someClass);
console.log('对象的浅克隆');
console.log(newObj);
// function cloneObj(origin) {
//     let originProto = Object.getPrototypeOf(origin);
//     return Object.assign(Object.create(originProto), origin);
// }
// var newOObj = cloneObj(someClass);
// console.log('对象的克隆，保持继承链，详见cloneObj方法');
// console.log(newOObj.someMethod(77, 55));
console.log('作用4：合并多个对象');
console.log('作用5：为属性指定默认值');

console.log('--- 6、属性的可枚举性和遍历 ---------');
console.log('可枚举性');
let obj = {foo: 123};
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
//{value: 123, writable: true, enumerable: true, configurable: true}
console.log('属性的遍历');
console.log('for...in');
console.log('for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。');
console.log('Object.keys(obj)');
console.log('Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。');
console.log('Object.getOwnPropertyNames(obj)');
console.log('Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。');
console.log('Object.getOwnPropertySymbols(obj)');
console.log('Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。');
console.log('Reflect.ownKeys(obj)');
console.log('Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。');

console.log('--- 7、Object.getOwnPropertyDescriptors() ---------');
console.log('返回某个对象属性的描述对象');

console.log('--- 8、__proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf() ---------');

console.log('--- 9、super关键字 ---------');
console.log('指向当前对象的原型对象');

console.log('--- 10、Object.keys()，Object.values()，Object.entries() ---------');

console.log('--- 11、对象的扩展运算符 ---------');
console.log('（1）解构赋值');
console.log('（2）扩展运算符');
console.log('（1）解构赋值');
console.log('（1）解构赋值');
console.log('（1）解构赋值');
console.log('--- 9、super关键字 ---------');
console.log('--- 9、super关键字 ---------');
console.log('--- 9、super关键字 ---------');
console.log('--- 9、super关键字 ---------');


console.log('---------------------------------------');
console.log('------ 09、对象的扩展（结束）-----------');
console.log('---------------------------------------');
