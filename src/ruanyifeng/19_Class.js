/**
 * Created by sf on 2017/12/23.
 */

// 19、Class的基本语法
console.log('\n\n');
console.log('---------------------------------------');
console.log('------ 19、Class的基本语法（开始）-----------');
console.log('---------------------------------------');

console.log('--- 1、简介 ---------');
//ES5的写法
function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
};
var p = new Point(1, 2);
console.log(p.toString());

//ES6的写法
class Point2 {
    constructor(x, y) {
        console.log('constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法');
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
var p2 = new Point2(11, 22);
console.log(p2.toString());

console.log('Object.assign方法可以很方便地一次向类添加多个方法');
Object.assign(Point2.prototype, {
    add(x, y){
        return (this.x + this.y);
    },
    cut(){
        return this.x - this.y;
    }
});
var p3 = new Point2(33, 44);
console.log(p3.add());
console.log(p3.cut());

console.log('类的属性名，可以采用表达式');
let methodName = 'getData';
Object.assign(Point2.prototype, {
    [methodName](x, y){
        return this.x * this.y;
    }
});
var p4 = new Point2(33, 44);
console.log(p4.getData());


console.log('---------------------------------------');
console.log('------ 19、Class的基本语法（结束）-----------');
console.log('---------------------------------------');
