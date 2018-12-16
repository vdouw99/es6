/**
 * Created by zhangsanfeng on 2018/12/13.
 */

let A = '模块化的“变量”引入';

function test() {
    console.log('模块化的“函数”引入');
}

class Hello {
    test() {
        console.log('模块化的“Class”引入');
    }
}

export default{A, test, Hello}

