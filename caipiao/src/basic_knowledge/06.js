/**
 * Created by zhangsanfeng on 2018/12/13.
 */

console.log('--------------------------06、数值扩展------------------------');

{
    console.log('二进制数' + 0b1101111);
    console.log('八进制数' + 0o777);
}

{
    console.log('数值是否有效' + Number.isFinite(14));
    console.log('数值是否有效' + Number.isFinite(14 / 0));
    console.log('数值是否有效' + Number.isFinite(NaN));
    console.log('数值是否有效' + Number.isFinite('abc'));
    console.log('数值是否有效' + Number.isFinite(0));
    console.log('isNaN=>' + Number.isNaN(1 / 0));
}

{
    console.log('是不是整数1=>' + Number.isInteger(1.222));
    console.log('是不是整数2=>' + Number.isInteger(25));
    console.log('是不是整数3=>' + Number.isInteger(25.0));
    console.log('是不是整数4=>' + Number.isInteger(-25));
    console.log('是不是整数5=>' + Number.isInteger('abc'));
}

{
    console.log('最大数' + Number.MAX_SAFE_INTEGER);
    console.log('最小数' + Number.MIN_SAFE_INTEGER);
}

{
    console.log(Number.isSafeInteger(10));
    console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
}

{
    console.log(Math.trunc(4.8));  //和Math.floor一样？
    console.log(Math.floor(4.8));
}

{
    console.log('Math.sign判断某值是否大于0=>' + Math.sign(-5));
    console.log('Math.sign判断某值是否大于0=>' + Math.sign(0));
    console.log('Math.sign判断某值是否大于0=>' + Math.sign(5));
    console.log('Math.sign判断某值是否大于0=>' + Math.sign('abc'));
}

{
    console.log('立方根' + Math.cbrt(88));
}