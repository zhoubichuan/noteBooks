//在全局作用域中，带var和不带var的关系
//区别：带var的可以进行预解释，所以在赋值的前面执行不会报错；不带var的是不能进行预解释，在前面执行会报错
console.log(num)//-->undefined
var num = 12

console.log(num2)//VM229:1 Uncaught ReferenceError: num2 is not defined
num2 = 12

//关系：num2 = 12-->相当于给window增加了一个叫做num2的属性名，属性值是12
//var num = 12 -->首先它相当于给全局作用域增加了一个全局变量num,但是不仅如此，它也相当于给windwo增加了一个属性名num,属性值是12
var num =12
console.log(num)

num2 = 12
console.log(num2)

//私有作用域中出现一个变量不是私有的，则往上级作用域查找，如果上级作用域没有则继续向上查找，一直找到window为止，如果window下也没有
//-->我们是获取值：console.log(total) -->报错了
//-->我们是设置值：total = 100 -->相当于给window增加了一个属性名total，属性值是100
function fn(){
    // console.log(total)
    total = 100
}
fn()
console.log(total)
//js中如果不进行任何特殊处理的情况下，上面的代码报错，下面的代码都不在执行