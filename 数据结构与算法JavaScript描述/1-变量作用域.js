/*
  JavaScript提供了两种定义函数的方式，一种有返回值，一种没有返回值（这种函数有时也叫做子程活void函数）
*/

// function curve (arr, amount) {
//   for (var i = 0; i < arr.length; ++i) {
//     arr[i] = amount
//   }
// }

// var grades = [77, 73, 74, 81, 90]
// curve(grades, 5)
// console.log(grades)

// 全局 局部变量
function showScope() {
  var scope = 'local'
  return scope
}

var scope = 'global'
console.log(scope) // global 如果定义scope 变量时，不使用var 那么定义的变量自动拥有全局作用域
console.log(showScope()) // local

function showScopeA() {
  scope = 'local'
  return scope
}

scope = 'global'
console.log(scope) // glocal 
console.log(showScopeA()) // local 执行showScopeA方法，由于没有定义var 变量提升到了全局  重新赋值成了local
console.log(scope) // local 

// 块级作用域
for (var i = 0; i < 10; ++i) {
  console.log(i)
}
console.log(i)


