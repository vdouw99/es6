/**
 * Created by sf on 2017/12/23.
 */

// 07、函数的扩展
console.log('\n\n');
console.log('---------------------------------------');
console.log('------ 07、函数的扩展（开始）-----------');
console.log('---------------------------------------');


console.log('---1.函数的参数默认值---------');
function locc(x, y = 'world') {
    console.log(x, y);
}
locc('Hello');

function foo11({x, y='与解构赋值默认值结合使用'}) {
    console.log(x + y);
}
foo11({x: '张三丰'});


console.log('---2、rest参数---------');
function addRest(...values) {
    let sum = 0;
    for (let i of values) {
        sum += i;
    }
    return sum;
}
console.log(addRest(1, 2, 36, 7));

// console.log('用rest代替arguments');
// function sortNumbersByArguments() {
//     return Array.prototype.slice.call(arguments).sort();
// }
// const sortNumbersByRest = (...numbers)=>numbers.sort();
// let arr77 = [1, 2, 4, 6, 9];
// sortNumbersByArguments(1, 2, 4, 6, 9);
// console.log(arr77);
// console.log(sortNumbersByRest(arr77));
// console.log(arr77);


console.log('---3、箭头函数---------');
const full = ({first, last})=>first + '|' + last;
console.log(full({first: '箭头函数', last: '可以与变量解构结合使用'}));

console.log([1, 2, 3].map(x=>x * x));

console.log('---------------------------------------');
console.log('------ 07、函数的扩展（结束）-----------');
console.log('---------------------------------------');
