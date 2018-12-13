/**
 * Created by zhangsanfeng on 2018/12/13.
 */

console.log('--------------------------04、字符串扩展（上）------------------------');

{
    console.log('a', '\u2016');
    console.log('a', '\u20161');
    console.log('字符的Unicode大于0xffff，用{}包起来');
    console.log('\u{20bb7}');
    console.log('\u20bb7');
}

{
    let s = '𠮷';
    console.log(s.length);  //2
    console.log(s.charAt(0));
    console.log(s.charAt(1));
    console.log(s.charCodeAt(0));
    console.log(s.charCodeAt(1));
}

{
    let s = '𠮷张111';
    console.log('charCodeAt只取两个字节');
    console.log(s.codePointAt(0));
    console.log(s.codePointAt(0).toString(16));
    console.log('张' + s.codePointAt(1).toString(16));
}

{
    console.log('ES5=>' + String.fromCharCode('0x20bb7'));
    console.log('ES6=>' + String.fromCodePoint('0x20bb7'));
}

{
    let str = '\u{20bb7}abc';
    for (let i = 0; i < str.length; i++) {
        console.log('ES5:' + str[i]);
    }
    for (let i of str) {
        console.log('ES6就正常了:' + i);
    }
}
