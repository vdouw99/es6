/**
 * Created by sf on 2017/12/23.
 */

// 11、Set和Map数据结构
console.log('\n\n');
console.log('---------------------------------------');
console.log('------ 10、Symbol（开始）-----------');
console.log('---------------------------------------');

console.log('--- 1、set ---------');
console.log('类似于数组，但是成员的值都是唯一的，没有重复的值。');
const s = new Set();
[1, 2, 33, 3, 3, 3, 3].forEach(x=>s.add(x));
console.log(s);  // Set(4) {1, 2, 33, 3}

console.log('数组去重');
let array1 = [1, 2, 3, 3, 3, 3, 3];
let array2 = [...new Set(array1)];
console.log(array2);  //(3) [1, 2, 3]

console.log('--- 2、WeakSet ---------');

console.log('--- 3、Map ---------');

console.log('--- 4、WeakMap ---------');


console.log('---------------------------------------');
console.log('------ 11、Set和Map数据结构（结束）-----------');
console.log('---------------------------------------');
