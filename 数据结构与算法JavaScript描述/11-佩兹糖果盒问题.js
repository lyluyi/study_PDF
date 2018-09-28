/*
  现实生活中栈的一个例子是佩兹糖果盒。一个糖果，里面塞满了红、黄、白色的糖果，但是你需要将黄色
  的糖果调出，且不能改变气他糖果叠放顺序的基础上，将黄色糖果移出。

  思路：解决此问题的思路是，从放糖果的栈中，将不喜欢的糖果放在一个栈（getColorStack）里，将其
  他糖果放入一个（setColorStack），最后取完糖果后，将盛装其他糖果的栈（setColorStack）中的糖
  果逐个放入其原来的栈（stack）中，其位置将不会变化。
*/ 

  const Stack = require('./6-栈的实现')

  function peziSweet () {
    var sweetBox = new Stack.createStack()
    var RandomColor = ['yellow', 'white', 'red']

    for (var i = 0; i < 20; i++) {
      var RandomNum = Math.floor(Math.random()*3)
      sweetBox.push(RandomColor[RandomNum])
    }
    console.log(sweetBox)

    var getColorStack = new Stack.createStack()
    var setColorStack = new Stack.createStack()

    for (var i = 0; i < sweetBox.length(); i++) {
      console.log(sweetBox.length())
      if (sweetBox.peek() === 'yellow') {
        getColorStack.push('yellow')
      } else {  
        setColorStack.push(sweetBox.peek())
      }
      sweetBox.pop()
      i--
    }
    console.log(getColorStack)
    console.log(setColorStack)
    console.log(sweetBox)
  }

  console.log(peziSweet())

