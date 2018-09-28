/*
  对大多数情况，JavaScript都有能力处理递归层级较深的递归调用（上面的例子递归层次较浅）；
  如果需要的算法递归深度超出了JavaScript的处理能力，那么就需要寻求该算法的一种迭代式解决
  方案。任何可以被递归定义的函数，都可以被改写为迭代式的程序，一定可以！
*/ 

function factorial (number) {
  if (number == 1) {
    return number
  }
  else {
    return number * factorial(number - 1)
  }
}

console.log(factorial(5))