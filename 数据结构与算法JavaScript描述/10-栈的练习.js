/*
  1、栈可以用来判断一个算术表达式中的括号是否匹配。

  编写一个函数，该函数接受一个算术表达式作为参数，返回括号缺失的位置。

  下面是一个括号不匹配的算术表达式的例子：2.3 + 23 / 12 + (3.14159×0.24。
*/ 

  const Stack = require('./6-栈的实现')

  function matchBracket (expression) {
    var s = new Stack.createStack()
    var eles = expression.split('') // 数组化存贮每一个字符串，包括空格
    for (var i = 0; i < eles.length; i++) {
      var ele = eles[i] // 循环遍历判断每一个字符
      if (['{', '[', '('].indexOf(ele) !== -1) { // 当前元素匹配成功时 { [ (
        s.push(ele) // 保存在栈顶
      } else {
        var topEle = s.peek() 
        /*
          取出栈顶元素，因为括号类运算符左右成对出现，因此
          可以进行成对匹配判断
        */ 
        switch (ele) {
          case '}':
            if (topEle === '{') {
              s.pop() // 匹配成功 删除这个栈顶记录 进行下一组匹配
              break
            }
            return i+1
          case ')':
            if (topEle === '(') {
              s.pop()
              break
            }
            return i+1
          case ']':
            if (topEle === '[') {
              s.pop()
              break
            }
            return i+1
        }
      }
    }
    if (s.length()) { // 从栈顶不断判断一至pop到栈内元素为空时，此时左右匹配括号项，右项即一定位于expression最后项
      return expression.length + 1
    }
    return -1 //
  }

  var eles = ('2.3 + 23 / 12 + (3.14159×0.24')
  console.log(matchBracket(eles))

  /*
  [
    '2',
    '.',
    '3',
    ' ',
    '+',
    ' ',
    '2',
    '3',
    ' ',
    '/',
    ' ',
    '1',
    '2',
    ' ',
    '+',
    ' ',
    '(',
    '3',
    '.',
    '1',
    '4',
    '1',
    '5',
    '9',
    '×',
    '0',
    '.',
    '2',
    '4' 
  ]
  
  */