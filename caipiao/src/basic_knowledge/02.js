/**
 * Created by zhangsanfeng on 2018/12/13.
 */

console.log('--------------------------02、解构赋值------------------------');

{
    let a, b;
    [a, b] = [22222222, 3333];
    console.log(a, b);
}

{
    let a, b, rest;
    [a, b, ...rest] = [1, 2, 4444, 32, 4, 2, 4, 43];
    console.log(a, b, rest);
}

{
    let a, b;
    ({a, b} = {a: 1, b: 222});
    console.log(a, b);
}

{
    console.log('赋值有“默认值”');
    let a, b, c;
    [a = 3, b = 2, c = 111] = [12, 31, 24, 4, 32, 4234];
    console.log(a, b, c);
}

{
    console.log('赋值交换');
    let a = 3, b = 4;
    [a, b] = [b, a];
    console.log(a, b);
}

{
    function f() {
        return [11, 2222];
    }

    let a, b;
    [a, b] = f();
    console.log(a, b);
}

{
    function f() {
        return [1, 3, 4, 44, 55];
    }

    let a, b;
    [a, , , b] = f();
    console.log(a, b);
}

{
    function f() {
        return [1, 2, 3, 4, 5, 6, 7];
    }

    let a, b, c;
    [a, ...b] = f();
    console.log(b);
    [a, , ...c] = f();
    console.log(c);
}

{
    console.log('对象的解构赋值');
    let o = {p: 42, q: true};
    let {p, q} = o;
    console.log(p, q);
}

{
    console.log('对象的解构赋值（默认值）');
    let {a=4, b} = {a: 333};
    console.log(a, b);
}

{
    console.log('解构赋值在嵌套的对象和数组中的应用，比较难理解');
    let metaData = {
        title: 'abc1111111',
        test: [
            {title: 'test111', desc: 'description'}
        ]
    };
    let {title:esTitle, test:[{title:cnTitle, desc:cnDesc}]} = metaData;
    console.log(esTitle, cnTitle, cnDesc);
}
