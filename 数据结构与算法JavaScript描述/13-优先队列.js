/*
  在一般情况下，从队列中删除的元素，一定是率先入队的元素。但是也有一些使用队列的应用，
  在删除元素时不必遵守先进先出的约定。这种应用，需要使用一个叫做优先队列的数据结构来
  进行模拟。

  从优先队列中删除元素时，需要考虑优先权的限制。比如，医院急症科的候诊室，就是一个采
  优先队列的列子。当病人进入候诊室时，分诊护士会评估患者病情的严重，然后给一个优先级
  代码。高优先级的患者先低于低优先级的患者就医，同样优先级的患者按照先后顺序进行服务
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

/*
  先定义存储队列元素的对象，然后再构建我们的优先队列系统

  变量code是一个整数，表示患者的优先级或病情严重程度
*/ 

  function Patient (name, code) {
    this.name = name
    this.code = code
  }

/*
  现在需要重新定义dequeue方法，使其删除队列中拥有最高优先级的元素。规定：优先码的值
  最小元素优先级最高。新的dequeue方法遍历队列的底层存储数组，从中找出优先码最低的元素
  ，然后使用数组的splice方法删除优先级最高的元素。新的dequeue方法定义如下
*/ 

  function dequeue () { // 函数重写
    var priority = this.dataStore[0].code
    for (var i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i].code < priority) {
        priority = i
      }
    }
    return this.dataStore.splice(priority, 1)
  }

  // dequeue方法使用简单的顺序查找方法寻找优先级最高的元素（优先码越小优先级越高，比如，1比5的优先级最高）
  // 该方法返回包含一个元素的数组--从队列中删除的元素。

  // 最后，需要定义toString方法来显示patient对象

  function toString () {
    var retStr = ''
    for (var i = 0; i < this.dataStore.length; i++) {
      retStr += this.dataStore[i].name + ' code: ' + this.dataStore[i].code + '\n'
    }
    return retStr
  }
  
  var p = new Patient('Jones1', 5)
  var ed = new Queue()
  ed.enqueue(p)
  p = new Patient('Jones2', 4)
  ed.enqueue(p)
  // console.log(ed.dequeue())
  // console.log(ed.toString())
  p = new Patient('Jones3', 2)
  ed.enqueue(p)
  p = new Patient('Jones4', 3)
  ed.enqueue(p)
  p = new Patient('Jones5', 1)
  ed.enqueue(p)
  p = new Patient('Jones6', 6)
  ed.enqueue(p)
  console.log(p)
  console.log(ed)
  console.log(ed.toString())









