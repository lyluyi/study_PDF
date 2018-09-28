/*
  列表的抽象数据类型定义
  ======================================
  listSize（属性）：列表的元素个数
  pos（属性）：列表的当前位置
  length（属性）： 返回列表中的元素个数
  clear（方法）：清空列表中的所有元素
  toString（方法）：返回列表的字符串形式
  getElement（方法）： 返回当前位置的元素
  insert（方法）： 在现有的元素后插入新元素
  append（方法）： 在列表的末尾添加新元素
  remove（方法）： 在列表中删除元素
  front（方法）： 将列表的当前位置移动到第一个元素
  end（方法）： 将列表的当前位置移动到最后一个元素
  prev（方法）： 将当前位置后移一位
  next（方法）： 将当前位置前移一位
  currPos（方法）: 返回列表的当前位置
  moveTo（方法）： 将当前的位置移动到指定位置

  根据上面的定义的列表抽象数据类型，可以直接实现一个List类。让我们从定义构造函数开始
*/ 

  function List() {
    this.listSize = 0
    this.pos = 0
    this.dataStore = [] // 初始化一个空数组来保存列表元素
    this.clear = clear
    this.find = find
    this.toString = toString
    this.insert = insert
    this.append = append
    this.remove = remove
    this.front = front
    this.end = end
    this.prev = prev
    this.next = next
    this.length = length
    this.currPos = currPos
    this.moveTo = moveTo
    this.getElement = getElement
    this.length = length
    this.contains = contains
  }

  // append: 给列表添加元素
  function append (element) {
    this.dataStore[this.listSize++] = element
  }
  /*
    var a = new List()
    a.append('aaa')
    console.log(a)

    a = List {
          listSize: 1,
          pos: 0,
          dataStore: [ 'aaa' ],
          append: [Function: append] 
        }
  */

  // find: 在列表中查找某一元素
  function find (element) {
    for (var i = 0; i < this.dataStore.length; i++) {
      console.log(i)
      if (this.dataStore[i] === element) {
        return i
      }
    }
    return -1
  }
  
  // remove: 从列表中删除元素
  function remove (element) {
    var foundAt = this.find(element)
    console.log(foundAt)
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize
      return true
    }
    return false
  }

  // length：列表中有多少个元素
  function length () {
    return this.listSize
  }

  // toString: 显示列表中的元素
  function toString () {
    return this.dataStore
  }

  // var a = new List()
  // a.append('a')
  // a.append('b')
  // console.log(a.toString())
  // a.append('c')
  // a.append('d')
  // console.log(a.toString())
  // a.remove('c')
  // console.log(a.toString())

  // insert: 向列表中插入一个元素
  function insert (element, after) {
    var insertPos = this.find(after)
    if ( insertPos > -1 ) {
      this.dataStore.splice(insertPos + 1, 0, element)
      ++this.listSize
      return true
    }
    return false
  }

  // clear：清空列表中所有的元素
  function clear () {
    delete this.dataStore // 使用delete操作符删除数组
    this.dataStore = [] // 创建一个新的数组
    this.listSize = this.pos = 0 // 将listSize和pos的值重置sa
  }

  // contains：判断给定值是否在列表中
  function contains () {
    for (var i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return true
      }
    }
    return false
  }

  // 遍历列表
  function front () {
    this.pos = 0
  }

  function end () {
    this.pos = this.listSize -1
  }

  function prev () {
    if (this.pos > 0) {
      --this.pos
    }
  }

  function next () {
    if (this.pos < this.listSize - 1) {
      ++this.pos
    }
  }

  function currPos () {
    return this.pos
  }

  function moveTo () {
    this.pos = position
  }

  function getElement() {
    return this.dataStore[this.pos]
  }

  /*
    创建一个由姓名组成的列表，来展示怎么使用这些方法：
  */ 

  var names = new List()
  names.append('Clayton')
  names.append('Raymond')
  names.append('Cynthia')
  names.append('Jennifer')
  names.append('Bryan')
  names.append('Danny')

  names.front() // 移动到列表的第一个元素
  console.log(names.getElement()) // 显示该元素

  // 接下来向前移动一个单位并且显示它
  names.next()
  console.log(names.getElement())

  // 现在，再向前移动两次，然后向后移动一次，显示出当前元素，看看prev方法的工作原理
  names.next()
  names.next()
  names.prev()
  console.log(names.getElement())

  var movies = read(films.txt).split('\n')
  console.log(movies)

/*
  列表的抽象数据类型定义
  ======================================
  listSize（属性）：列表的元素个数
  pos（属性）：列表的当前位置
  length（属性）： 返回列表中的元素个数
  clear（方法）：清空列表中的所有元素
  toString（方法）：返回列表的字符串形式
  getElement（方法）： 返回当前位置的元素
  insert（方法）： 在现有的元素后插入新元素
  append（方法）： 在列表的末尾添加新元素
  remove（方法）： 在列表中删除元素
  front（方法）： 将列表的当前位置移动到第一个元素
  end（方法）： 将列表的当前位置移动到最后一个元素
  prev（方法）： 将当前位置后移一位
  next（方法）： 将当前位置前移一位
  currPos（方法）: 返回列表的当前位置
  moveTo（方法）： 将当前的位置移动到指定位置

  根据上面的定义的列表抽象数据类型，可以直接实现一个List类。让我们从定义构造函数开始
*/ 

console.log(a)
var a =1; 
console.log(a)
function a(){}
console.log(a)
