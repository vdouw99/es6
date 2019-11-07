/**
 * Created by sf on 2017/12/23.
 */

// 10、Symbol
console.log('\n\n');
console.log('---------------------------------------');
console.log('------ 10、Symbol（开始）-----------');
console.log('---------------------------------------');

console.log('--- 1、概述 ---------');
console.log('ES5的对象名都是字符串，如果想为对象添加新的方法（mixin模式），方法名就有可能产生冲突');
console.log('ES6引入一种新的原始数据类型Symbol，表示独一无二');
let s = Symbol();
console.log(typeof s);  //symbol

console.log('--- 2、作为属性名的Symbol ---------');
let mySymbol = Symbol();
let mySymbol2 = Symbol();
let a = {
  [mySymbol]: 'Hello'
};
a[mySymbol2] = 'world';
console.log(a);


console.log('---------------------------------------');
console.log('------ 10、Symbol（结束）-----------');
console.log('---------------------------------------');
