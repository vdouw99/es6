/**
 * Created by zhangsanfeng on 2018/12/13.
 */

console.log('--------------------------14、Class and Object------------------------');

{
    console.log('类的定义和实例化');
    class Person {
        constructor(name = 'imooc') {
            this.name = name;
        }
    }
    let v_parent = new Person('v');
    console.log(v_parent);
}

{
    console.log('类的继承');
    class Person {
        constructor(name = 'imooc') {
            this.name = name;
        }
    }
    class Child extends Person {
    }
    console.log(new Child());
}

{
    console.log('子类向父类传递参数');
    class Person {
        constructor(name = 'imooc') {
            this.name = name;
        }
    }
    class Child extends Person {
        constructor(name = '慕课网') {
            super(name);  //子类向父类传递参数
            this.height = '177cm';
        }
    }
    console.log(new Child());
}

{
    console.log('getter|setter');
    class Person {
        constructor(name = 'imooc') {
            this.name = name;
        }

        get loginName() {
            return '->->->' + this.name;
        }

        set setLoginName(val) {
            this.name = val;
        }
    }
    let v = new Person();
    console.log(v.loginName);
    v.setLoginName = '慕课网';
    console.log(v.loginName);
}

{
    class Person {
        constructor(name = 'imooc') {
            this.name = name;
        }

        static tell() {
            return ('静态方法');
        }
    }
    Person.tt = '静态属性';
    console.log(Person.tell());
    console.log(Person.tt);
}

