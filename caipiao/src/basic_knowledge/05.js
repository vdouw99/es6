/**
 * Created by zhangsanfeng on 2018/12/13.
 */

console.log('--------------------------05、字符串扩展（下）------------------------');

{
    let str = 'string';
    console.log(str.includes('r'));
    console.log('以什么开始' + str.startsWith('str'));
    console.log('以什么结束' + str.endsWith('ing'));
}

{
    let str = 'abc';
    console.log('字符串复制' + str.repeat(3));
}

{
    let [name,info] = ['张三丰', 'hello world'];
    let m = `${name},${info}`;
    console.log('模板字符串=>' + m);
}

{
    console.log('补白到10位=》' + '6'.padStart(10, '-'));
    console.log('补白到10位（向后补）=》' + '6'.padEnd(10, '-'));
}

{
    console.log('标签模板，没学，不知道啥用');
    let [name,info] = ['张三丰', 'hello world'];
}

// {
//     console.log(String.row`Hi\n${1+2}`);  //报错
//     console.log(`Hi\n${1+2}`);
// }
