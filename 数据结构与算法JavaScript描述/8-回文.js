/*
   使用栈，可以轻松判断一个字符是否为回文。
   1、将拿到的字符串的每个字符从左都至右的顺序压入栈。
   2、当字符串中的字符都入栈后，栈内就保存了一个反转后的字符串。
   3、最后的字符在栈顶，第一个字符在栈尾
*/

// 判断一个字符串是否为回文

const Stack = require('./6-栈的实现')

function isReverse (word) {
  var s = Stack.createStack()
  for (var i = 0; i < word.length; i++) {
    s.push(word(i))
  }
  var rword = ''
  while (s.length() > 0) {
    rword += s.pop()
  }
  if (word == rword) {
    return true
  }
  else {
    return false
  }
}
