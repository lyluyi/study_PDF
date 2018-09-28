/*
  栈常常被从来实现编程语言，使用栈实现递归即为一例。

  1、使用递归函数，可以计算任何数字的阶乘
*/ 

  function factorial (n) {
    if (n === 0) {
      return 1
    } else {
      return n* factorial(n-1)
    }
  }

  const Stack = require('./6-栈的实现')
  
  // 使用栈模拟递归 阶乘

  function fact (n) {
    var s = new Stack.createStack()
    while (n > 1) {
      s.push(n--)
    }
    var product = 1
    while (s.length() > 0) {
      product *= s.pop()
    }
    return product
  }

  console.log(fact(5))
  

