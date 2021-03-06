//在es5中没有类的概念 构造函数
//es6 class

//类的继承 三种属性 公有属性（__proto__） 私有属性 静态方法（静态属性）
function Parent() {
  //构造函数中的this 通过new调用的那么this指代的是实列
  this.name = "parent";
}
Parent.prototype.eat = function() {
  console.log("eat");
};
let parent = new Parent();

//先找私有属性找不到然后找公有属性
parent.__proto__.eat();
Parent.prototype.constructor === Parent;
function Child() {
  this.age = 9;
  Parent.call(this);
}
let child = new Child();
console.log(child.name);
//1.继承私有属性

//继承公有属性
Child.prototype.__proto__ = Parent.prototype;

Object.setPrototypeOf(Child.prototype, Parent.prototype);

//只继承公有
Child.prototype = Object.create(Parent.prototype, {
  constructor: { value, Child }
});

//实现原理
function create(parentPrototype) {
  function Fn() {}
  Fn.prototype = parentPrototype;
  let fn=new Fn()
  for(let key in props){
      Object.defineProperty(fn,key,{
          ...props[key],
          enumerable:true
      })
  }
  return fn;
}

let a = {};
a.name = 1;
console.log(a.name);
Object.defineProperty(a, "name", {
  enumerable: true, //表示这个属性是否可以被枚举出来
  configurable: true, //表示这个属性是否可以被删除
//   writable: true,//用了这个就不能用get set
  get() {
    console.log("get");
    return 1;
  },
  set() {}
});

//3.继承公有属性和私有属性
Child.prototype=new Parent()