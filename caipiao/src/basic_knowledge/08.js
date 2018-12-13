/**
 * Created by zhangsanfeng on 2018/12/13.
 */

console.log('--------------------------08、函数扩展------------------------');

{
    console.log('函数默认值' + a(11));
    function a(a = 3) {
        return a + 9;
    }
}

{
    console.log('看懂作用域');
    let x = 'test';
    test2('kill');  //kill kill
    function test2(x, y = x) {
        console.log(x, y);
    }
}

{
    test3(1, 2, 3, 4, 'a');
    function test3(...arg) {
        for (let i of arg) {
            console.log('rest将不确定的参数转换成了数组', i);
        }
    }
}

{
    console.log('扩展运算符：将数组拆散成一个一个的值');
    console.log(...[1, 2, 3]);
}

{
    let arrow = v=>v + 2;
    let arrow2 = ()=>'aaa';
    console.log('箭头函数' + arrow(3));
    console.log('箭头函数' + arrow2());
}

{
    console.log('伪调用：提升性能');
    fx(123);
    function tail(x) {
        console.log(x);
    }

    function fx(x) {
        return tail(x);
    }
}