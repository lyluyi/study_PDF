/*
  队列是一种列表，不同的是队列只能在队尾插入元素，在队首删除元素。队列用于存储按顺序
  排列的数据，先进先出，这点和栈不一样，在栈中，最后入栈的元素反而被优先处理。可以将
  队列想象成银行钱排队的人群，排在最前面的人第一个办理业务，新来的人只能在后面排队，
  直到轮到他们为止。

  队列是一种先进先出的数据结构。队列被用在很多地方，比如提交操作系统执行的一系列进程、
  打印任务池等，一些仿真系统用队列来模拟银行和杂货店里排队的顾客。

  对队列的操作：

  队列的两种主要操作是： 向队列中插入新元素和删除队列中的元素个数。插入操作也叫做入队，
  删除操作也叫出队。入队操作在队尾插入新元素，出队操作删除队头的元素。

  队列的另外一项重要操作是读取队头的元素。这个操作叫做peek()。该操作返回队头元素，但不
  把它从队列中删除。除了读取队头元素，我们还想知道队列中存储了多少元素，可以使用length
  属性满足该需求；要想清空队列中的所有元素，可以使用clear（）方法来实现。

*/

/*

  使用数组来实现队列看起来顺理成章。JavaScript中的数据具有其他编程语言中没有的优点。数组
  的push方法可以在数组末尾加入元素，shift方法可以删除数组的第一个元素。

  push方法将它的参数插入数组中第一个开放的位置，该位置总在数组的末尾，即使是个空数组也如此。

*/

  function Queue () {
    this.dataStore = []
    this.enqueue = enqueue
    this.dequeue = dequeue
    this.front = front
    this.back = back
    this.toString = toString
    this.empty = empty
  }

  // enqueue 方法 向队尾添加一个元素
  function enqueue (element) {
    this.dataStore.push(element)
  }

  // dequeue 方法 删除队首的元素
  function dequeue () {
    return this.dataStore.shift()
  }

  // 读取队首元素
  function front () {
    return this.dataStore[0]
  }

  // 读取队尾元素
  function back () {
    return this.dataStore[this.dataStore.length - 1]
  }

  // 显示队列内所有的元素
  function toString () {
    var retStr = ''
    for (var i = 0; i < this.dataStore.length; i++) {
      retStr += this.dataStore[i] + '\n'
    }
    return retStr
  }

  // 判断队列是否为空
  function empty () {
    if (this.dataStore.length === 0) {
      return true
    } else {
      return false
    }
  }

  // 测试
  var q = new Queue()
  q.enqueue('aaa')
  q.enqueue('bbb')
  q.enqueue('ccc')
  console.log(q.toString())
  q.dequeue()
  console.log(q.toString())
  console.log('Front of queue: ' + q.front())
  console.log('Bakc of queue: ' + q.back())
