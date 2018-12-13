/**
 * Created by zhangsanfeng on 2018/12/13.
 */

console.log('--------------------------07、数组扩展------------------------');

{
    let arr = Array.of(3, 4, 7, 9, 11);
    console.log(arr);
    let empty = Array.of();
    console.log(empty);
}

{
    console.log('Array.from把Dom集合转换成了真正的数组（有了forEach方法）');
    let p = document.querySelectorAll('.p');
    let pArr = Array.from(p);
    pArr.forEach(function (item) {
        console.log(item.textContent);
    });
}

{
    console.log('Array.from的第二种用法：转换数组的同时，把数组遍历了一次');
    console.log(Array.from([1, 3, 5], function (item) {
        return item * item;
    }));
}

{
    console.log('填充数据');
    console.log([1, 'a', undefined].fill(7));
    console.log(['a', 'b', 'c'].fill(7, 0, 2));
}

{
    console.log('keys返回索引');
    for (let index of ['1', 'c', 'ks'].keys()) {
        console.log(index);
    }
}

{
    console.log('values返回值');
    for (let i of ['bbb', 'c', 'ks'].values()) {
        console.log(i);
    }
}

{
    console.log('entries返回索引和值');
    for (let [i,v] of ['a', 'b', 'c'].entries()) {
        console.log(i + ':' + v);
    }
}

{
    var a = [0, 1, 2, 3, 4, 5].copyWithin(2, 1, 3);
    console.log(a);  // [0, 1, 1, 2, 4, 5]
}

{
    var arr = [1, 2, 3, 4, 5, 6].find(function (item) {
        return item > 3;
    });
    console.log('find只找了一个' + arr);
}

{
    let a = ['a', 'b', 'c', 'd', 'e'].findIndex(function (item) {
        return item === 'd';
    });
    console.log('findIndex只找了一个' + a);
}

{
    let c = [1, 2, NaN].includes(NaN);
    console.log('includes更强大' + c);
}
