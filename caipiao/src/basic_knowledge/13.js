/**
 * Created by zhangsanfeng on 2018/12/13.
 */

console.log('--------------------------13、Proxy和Reflect------------------------');

{
    let obj = {time: '2018-12-12', name: '张三丰', _r: 123, height: '177cm'};
    let monitor = new Proxy(obj, {
        // 拦截对象属性的读取
        get(target, key){
            return target[key].replace('2018', '2020');
        },
        // 拦截对象属性的设置
        set(target, key, value){
            if (key === 'name') {  //只能修改key=name的属性
                return target[key] = value;
            } else {
                return target[key];
            }
        },
        // 拦截key in Object操作
        has(target, key){
            if (key === 'name') {
                return target[key];
            } else {
                return false;
            }
        },
        // 拦截delete
        deleteProperty(target, key){
            if (key.indexOf('_') > -1) {
                delete target[key];
                return true;
            } else {
                return target[key];
            }
        },
        // 拦截Objdect.keys | Object.getOwnPropertySymbols | Object.getOwnPropertyNames
        ownKeys(target){
            return Object.keys(target).filter(item=>item != 'height');
        }
    });
    console.log(monitor['time']);
    monitor.time = '2011-11-11';
    monitor.name = '张无忌';
    console.log(monitor);  //Proxy {time: "2018-12-12", name: "张无忌", _r: 123}
    console.log("'name' in monitor===>>>" + ('name' in monitor));
    console.log("'time' in monitor===>>>" + ('time' in monitor));
    delete monitor['name'];
    delete monitor._r;
    console.log('after delete===》》》');
    console.log(monitor);
    console.log('Object.keys===》》》' + Object.keys(monitor));
}

{
    let obj = {time: '2018-12-12', name: '张三丰', _r: 123, height: '177cm'};
    console.log('Reflect.get===》》》' + Reflect.get(obj, 'time'));
    Reflect.set(obj, 'name', '张无忌');
    console.log(obj);
    console.log('Reflect.has===》》》' + (Reflect.has(obj, 'height')));
}

{
    function validator(target, validator) {
        return new Proxy(target, {
            _validator: validator,
            set(target, key, val, proxy){
                if (target.hasOwnProperty(key)) {
                    let va = this._validator[key];
                    if (!!va(val)) {
                        return Reflect.set(target, key, val, proxy);
                    } else {
                        throw Error(`不能设置${key}为${val}`);
                    }
                } else {
                    throw Error(`${key}不存在`);
                }
            }
        });
    }

    const personValidator = {
        name(val){
            return typeof val === 'string'
        },
        age(val){
            return typeof val === 'number' && val >= 18
        }
    };

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            return validator(this, personValidator);
        }
    }

    const person = new Person('张一丰', 30);
    console.log(person);
    // person.name = 48;  //报错
    // person.age = 10;
}

