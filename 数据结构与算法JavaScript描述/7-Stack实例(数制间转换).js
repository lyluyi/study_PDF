/*
  可以利用栈将一个数字从一种数制转换成另一种数制。假设想将数字n转换为
  以b为基数的数字，实现转换的算法如下。

  1、最高位为n%b, 将此位压入栈
  2、使用n/b代替n
  3、重复步骤1和2,，直到n等于0，且没有余数
  4、持续将栈内元素弹出，直到栈尾空，依次将这些元素排列，就得到转换后数字的字符串形式

  ！！！此算法只针对基数为2-9的情况
*/

const Stack = require('./6-栈的实现')

console.log(Stack.createStack)

function mulBase (num, base) {
  var s = new Stack.createStack // 新建一个实例
  do { // 首先使用do进行第一次处理
    s.push(num % base) // 将每次运算后的结果存入栈顶
    num = Math.floor( num /= base) // num = num / base 向下取整
  } while (num > 0) { // 判断 num 是否大于0 能够继续进行运算
    var converted = ''
    while (s.length() > 0) {
      converted += s.pop() // 取出栈顶元素 并且删除
    }
    return converted // 返回结果
  }
}

console.log(mulBase(32, 4))