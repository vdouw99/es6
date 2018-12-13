/**
 * Created by zhangsanfeng on 2018/12/13.
 */

console.log('--------------------------09、对象扩展------------------------');

{
    let o = 1;
    let k = 2;
    let es5 = {o: o, k: k};
    let es6 = {o, k};
    console.log('ES6的简洁写法', es5, es6);
}

{
    let es5_method = {
        hello: function () {
            console.log('es5');
        }
    };
    let es6_method = {
        hello(){
            console.log('es6');
        }
    };
    es5_method.hello();
    es6_method.hello();
}

{
    console.log('属性表达式');
    let a = 'b';
    let es5_obj = {a: 'c'};
    let es6_obj = {[a]: 'c'};
    console.log(es5_obj);
    console.log(es6_obj);
}

{
    console.log('“Object.js”和“===”的功能一样');
    console.log(Object.is('abc', 'abc'), 'abc' === 'abc');
    console.log(Object.is([], []), [] === []);
}

{
    console.log('对象拷贝Object.assign（浅拷贝）');
    let a = {a: 'a'};
    let b = {b: 'b'};
    let c = Object.assign(a, b);  //b拷贝到了a
    console.log(a, b, c);
}

{
    console.log('对象的Object.antries');
    let test = {k: 123, o: 456};
    for (let [key,val] of Object.entries(test)) {
        console.log([key, val]);
    }
}

{
    // console.log('扩展运算符');
    // let {a, b, ...c} = {a: 'test', b: 'kill', c: 'ccc', d: 'ddd'};
    // console.log(c);  //babel支持不好
}