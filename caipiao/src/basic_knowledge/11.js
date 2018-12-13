/**
 * Created by zhangsanfeng on 2018/12/13.
 */

console.log('--------------------------11、set-map数据结构------------------------');

{
    let list = new Set();
    list.add(5);
    list.add(7);
    console.log(list);
    console.log(list.size);
}

{
    console.log('Set的元素是唯一的');
    let arr = [1, 2, 3, 4, 4];
    let list = new Set(arr);
    console.log(list);
}

{
    console.log('利用Set给数组去重');
    let arr = [1, 1, '1', 1, 4, 4, 5, 3, 5, 6, 7];
    let list = new Set(arr);
    console.log(list);
}

{
    let list = new Set([1, 2, 3, 4, 5]);
    console.log(list.has(2));  //true
    console.log(list.has('2'));  //false
    list.delete(2);
    console.log(list);
    list.clear();
    console.log(list);
}

{
    let list = new Set(['bbb', 2, 3, 4, 5]);
    for (let i of list.keys()) {
        console.log(i);
    }
    for (let i of list.values()) {
        console.log(i);
    }
    console.log('key和value一样');
    for (let i of list) {
        console.log(i);
    }
    for (let [key,val] of list.entries()) {
        console.log(key, val);
    }
    list.forEach(function (item) {
        console.log(item);
    })
}

{
    console.log('WeakSet只能是对象');
    let weakList = new WeakSet();
    let arg = {};
    weakList.add(arg);
    console.log(weakList);
}

{
    let map = new Map();
    let arr = [123, 456];
    map.set(arr, 789);
    console.log(map);
}

{
    let weekMap = new WeakMap();
}