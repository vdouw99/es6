/**
 * Created by zhangsanfeng on 2018/12/13.
 */

console.log('--------------------------10、Symbol数据类型------------------------');

{
    console.log('Symbol类型的作用是：生成独一无二的值');
    let a = Symbol();
    let b = Symbol();
    console.log(a === b);  //false
    let c = Symbol.for('c');
    let d = Symbol.for('c');
    console.log(c === d);  //true
}

{
    let e = Symbol.for('abc');
    let obj = {[e]: 123, abc: 345};
    console.log(obj);
    console.log(obj.abc);  //345
    Object.getOwnPropertySymbols(obj).forEach(function (item) {
        console.log(obj[item]);
    });
    Reflect.ownKeys(obj).forEach(function (item) {
        console.log(item, obj[item]);
    })
}