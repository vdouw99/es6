/**
 * Created by zhangsanfeng on 2018/12/13.
 */

console.log('--------------------------12、set-map和Array-Object的对比------------------------');

{
    console.log('Map、Set和Array的对比');
    let map = new Map();
    let set = new Set();
    let array = [];

    console.log('Map、Set和Array=》增');
    map.set('a', 1);
    map.set('b', 2);
    set.add({a: 1});
    set.add({b: 2});
    array.push({a: 1, b: 2});
    console.log(map, set, array);

    console.log('Map、Set和Array=》查');
    let map_exist = map.has('t');
    let set_exist = set.has('a');
    console.log(map_exist);
    console.log('set_exist' + set_exist);
    console.log(array.find(item=>item.t));  //undefined
    console.log(array.find(item=>item.a));  //{a: 1, b: 2}

    console.log('Map、Set和Array=》改');
    map.set('a', 33);
    set.forEach(item=>item.a ? item.a = 333 : '');
    array.forEach(item=>item.a ? item.a = 33 : '');
    console.log(map, set, array);

    console.log('Map、Set和Array=》删');
    map.delete('a');
    set.forEach(item=>item.a ? set.delete(item) : '');
    // let index = array.findIndex(item=>item.c);
    // array.splice(index, 1);
    delete array[0]['a'];
    console.log(map, set, array);
}



