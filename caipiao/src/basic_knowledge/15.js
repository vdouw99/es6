/**
 * Created by zhangsanfeng on 2018/12/13.
 */

console.log('--------------------------15、Promise------------------------');

console.log('异步编程的解决方案');

{
    console.log('ajax的处理方案');
    let ajax = function (callback) {
        console.log('11111');
        setTimeout(function () {
            callback && callback();
        }, 10);
    };
    ajax(function () {
        // console.log(22222);
    });
}

{
    let ajax = function () {
        console.log('33333');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 10);
        });
    };
    ajax().then(()=> {
        // console.log('44444');
    })
}

{
    let ajax = function () {
        console.log('55555');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 10);
        });
    };
    ajax().then(()=> {
        return new Promise((resolve, reject)=> {
            setTimeout(()=> {
                resolve();
            }, 10);
        });
    }).then(()=> {
        // console.log('666666666');
    })
}

{
    let ajax = function (num) {
        console.log('77777');
        return new Promise(function (resolve, reject) {
            if (num > 5) {
                resolve();
            } else {
                throw new Error('出错啦');
            }
        });
    };
    ajax(12).then(()=> {  //小于5就报错
        // console.log(88888);
    }).catch((err) => {
        console.log(err);
    });
}

// {
//     // 所有的图片加载完后，再加载到页面
//     function loadImg(src) {
//         return new Promise((resolve, reject)=> {
//             let img = document.createElement('img');
//             img.src = src;
//             img.onload = function () {
//                 resolve(img);
//             };
//             img.onerror = function (err) {
//                 reject(err);
//             };
//         });
//     }
//
//     function showImgs(imgs) {
//         imgs.forEach((img)=> {
//             document.body.appendChild(img);
//         })
//     }
//
//     Promise.all([  //把多个Promise实例，当作一个Promise实例
//         loadImg('http://pic1.win4000.com/pic/9/a3/7e591391054.jpg'),
//         loadImg('http://pic1.win4000.com/pic/9/a3/7e591391055.jpg'),
//         loadImg('http://pic1.win4000.com/pic/9/a3/7e591391056.jpg'),
//         loadImg('http://pic1.win4000.com/pic/9/a3/7e591391056.jpg'),
//         loadImg('http://pic1.win4000.com/pic/9/a3/7e591391058.jpg'),
//         loadImg('http://pic1.win4000.com/pic/9/a3/7e591391059.jpg')
//     ]).then(showImgs);
// }
//
// {
//     // 有一个图片加载完，就显示到页面
//     function loadImg11(src) {
//         return new Promise((resolve, reject)=> {
//             let img = document.createElement('img');
//             img.src = src;
//             img.onload = function () {
//                 resolve(img);
//             };
//             img.onerror = function (err) {
//                 reject(err);
//             };
//         });
//     }
//
//     function showImgs11(img) {
//         let p = document.createElement('p');
//         p.appendChild(img);
//         document.body.appendChild(p);
//     }
//
//     Promise.race([
//         loadImg11('http://pic1.win4000.com/pic/9/a3/7e591391054.jpg'),
//         loadImg11('http://pic1.win4000.com/pic/9/a3/7e591391055.jpg'),
//         loadImg11('http://pic1.win4000.com/pic/9/a3/7e591391056.jpg'),
//         loadImg11('http://pic1.win4000.com/pic/9/a3/7e591391056.jpg'),
//         loadImg11('http://pic1.win4000.com/pic/9/a3/7e591391058.jpg'),
//         loadImg11('http://pic1.win4000.com/pic/9/a3/7e591391059.jpg')
//     ]).then(showImgs11);
// }
