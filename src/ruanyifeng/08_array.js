/**
 * Created by sf on 2017/12/23.
 */

// 08、数组的扩展
console.log('---------------------------------------');
console.log('------ 08、数组的扩展（开始）-----------');
console.log('---------------------------------------');


console.log('---1.扩展运算符---------');
console.log('扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。');
function arrayPushSpread(arr, ...items) {
    arr.push(...items);
}
var array = [];
arrayPushSpread(array, ...[44, 4, 55, 66]);
console.log(array);

function f(x, y, z) {
    console.log(x + y + z);
}
var args = [1, 2, 3];
f.apply(null, args);  // ES5的写法
let args1 = [3, 4, 5];
f(...args1);  // ES6的写法


console.log('---2.Array.from()---------');
console.log('Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象');

console.log('---3.Array.of()---------');
console.log('Array.of方法用于将一组值，转换为数组。');
console.log(Array.of(3, 11, 22));

console.log('---4.copeWithin()---------');
console.log('在数组内，将指定位置的成员复制到其他位置');
console.log([1, 2, 3, 4, 5].copyWithin(2, 3));      //[1, 2, 4, 5, 5]
console.log([1, 2, 3, 4, 5].copyWithin(2));         //[1, 2, 1, 2, 3]

console.log('---5、find()和findIndex() ---------');
console.log('find方法，用于找出第一个符合条件的数组成员。');
console.log('参数是一个回调函数，所有数组成员依次执行该回调函数，直到找到第一个返回值为ture的成员');
console.log([1, 2, 3, 4, 5].find((n)=>n > 3));  //4
console.log([1, 2, 3, 4, 5].find((n)=>n < 0));  //undefined
console.log([1, 2, 3, 4, 5].findIndex((n)=>n > 3));  //3
console.log([1, 2, 3, 4, 5].findIndex((n)=>n < 0));  //-1

console.log('---6、fill() ---------');
// arg1:填充字符串；arg2:起始位置；arg3:结束位置
console.log(['a', 'b', 'c'].fill(5));  //[5, 5, 5]
console.log(['a', 'b', 'c'].fill(7, 1, 2));  //["a", 7, "c"]

console.log('---7、keys() values() entries() ---------');
console.log('键名的遍历，键值的遍历，键值对的遍历');
for (let index of ['a', 'b'].keys()) {
    console.log(index);
}
for (let val of ['a', 'b'].values()) {
    console.log(val);
}
for (let [index,val] of ['a', 'b'].entries()) {
    console.log(index, val);
}

console.log('---8、includes() ---------');
console.log('返回一个布尔值，表示某个数组是否包含给定的值');
console.log([1, 2, 3].includes(2));
console.log([1, 4, 2, 3].includes(7));


console.log('---------------------------------------');
console.log('------ 08、数组的扩展（结束）-----------');
console.log('---------------------------------------');
