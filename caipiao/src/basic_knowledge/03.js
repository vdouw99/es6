/**
 * Created by zhangsanfeng on 2018/12/13.
 */

console.log('--------------------------03、正则扩展------------------------');

{
    let regex1 = new RegExp('xyz', 'i');
    let regex2 = new RegExp(/xyz/i);
    console.log(regex1.test('xyz123'));
    console.log(regex2.test('xyz123'));
    let regex3 = new RegExp(/xyz/ig, 'i');
    console.log(regex3.flags);  //i
    console.log('es6的正则，第2个修饰符覆盖了第1个修饰符');
}

{
    let s = 'bbb_bb_b';
    let reg1 = /b+/g;
    let reg2 = new RegExp(/b+/, 'y');  //let reg2 = /b+/y;
    console.log('1' + reg1.exec(s));
    console.log('1' + reg2.exec(s));
    console.log('2' + reg1.exec(s));
    console.log('2' + reg2.exec(s));
    console.log('正则的y修饰符也是全局匹配，但下一次匹配必须紧跟上一次的指针');
    console.log('查看正则是否开启y修饰符:' + reg1.sticky);
    console.log('查看正则是否开启y修饰符:' + reg2.sticky);
}

{
    let s = 'abcabcabcabc';
    let r1 = new RegExp(/abc/, 'g');
    let r2 = new RegExp(/abc/, 'y');
    console.log(r1.exec(s), r2.exec(s));
    console.log(r1.exec(s), r2.exec(s));
    console.log(r1.exec(s), r2.exec(s));
}

{
    console.log('正则修饰符u告诉你：“.”并不能匹配所有字符');
}
