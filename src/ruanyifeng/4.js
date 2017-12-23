/**
 * Created by sf on 2017/12/23.
 */

// 4、字符串的扩展
console.log('---------------------------------------');
console.log('------ 4、字符串的扩展（开始）-----------');
console.log('---------------------------------------');

// 5.at()
console.log('提出字符串实例的at方法，可以识别 Unicode 编号大于0xFFFF的字符，返回正确的字符。');
const word = '张𠮷可耕地三丰';
for (let i = 0; i < word.length; i++) {
    console.log(i + '--at--' + word.at(i));
    console.log(i + '--charAt--' + word.charAt(i));
}

// 7.includes(), startsWith(), endsWith()
console.log('传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新方法。');

// 8.repeat()
console.log('0'.repeat(9) + 'repeat()');

// 9.padStart(), padEnd()
console.log('字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全');
console.log('如果省略第二个参数，默认使用空格补全长度。');
console.log('X'.padStart(5, 'cgh'));
console.log('X'.padEnd(10, 'cgh'));
console.log('另一个用途是提示字符串格式。');
console.log('09-12'.padStart(10, 'YYYY-MM-DD'));

// 10.模板字符串
var a = 'aaa';
console.log(`模板${a}字符串`);

console.log('---------------------------------------');
console.log('------ 4、字符串的扩展（结束）-----------');
console.log('---------------------------------------');
