/**
 * Created by zhangsanfeng on 2018/12/13.
 */

console.log('--------------------------17、Generator------------------------');

console.log('异步编程的解决方案');

{
    let tell = function*() {
        yield 'a';
        yield 'b';
        return 'c';
    };
    let k = tell();
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}

{
    let obj = {};
    obj[Symbol.iterator] = function*() {
        yield 'Symbol.iterator111';
        yield 'Symbol.iterator222';
        yield 'Symbol.iterator333';
    };
    for (let i of obj) {
        console.log(i);
    }
}

{
    let state = function*() {
        while (1) {
            yield 'A';
            yield 'B';
            yield 'C';
        }
    };
    let status = state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}

// {
//     // 运行不了，babel要安装依赖？
//     let state11 = async function () {
//         while (1) {
//             await 'A';
//             await 'B';
//             await 'C';
//         }
//     };
//     let status11 = state11();
//     console.log(status11.next());
//     console.log(status11.next());
// }

{
    let draw = function (count) {
        // 具体抽匀逻辑
        console.log(`剩余${count}次`);
    };
    let residue = function*(count) {
        while (count > 0) {
            count--;
            yield draw(count);
        }
    };
    let start = residue(5);  //后端传入
    let btn = document.createElement('button');
    btn.id = 'start123';
    btn.textContent = '抽奖';
    document.body.appendChild(btn);
    document.getElementById('start123').addEventListener('click', function () {
        start.next();
    }, false);
}

{
    // 长轮询
    let ajax = function*() {
        yield new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve({code: 0});  //调用接口，0改成1可以看效果
            }, 20);
        })
    };
    let pull = function () {
        let genertaor = ajax();
        let step = genertaor.next();
        step.value.then(function (d) {
            if (d.code != 0) {
                setTimeout(function () {
                    console.log('长轮询wait');
                    pull();
                }, 20);
            } else {
                // console.log('长轮询');
                // console.log(d);
            }
        })
    };
    pull();
}
