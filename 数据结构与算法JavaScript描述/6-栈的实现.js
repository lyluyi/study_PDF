/*
  栈的数据结构 删除添加都是从栈顶开始

  实现一个栈，当务之急是决定存储数据的底层数据结构。这里采用的是数组

  实现以定义stack类的构造函数开始

  用数组dataStore保存栈内元素，构造函数将其初始化为一个空数组。变量top记录栈顶位置
  被构造函数初始化为0，表示栈顶对应数组的起始位置

  入栈使用push（） 出栈使用pop（）但会删除栈顶元素    peek（）方法只返回栈顶元素 但不删除
*/ 

function Stack() {
  this.dataStore = []
  this.top = 0
  this.push = push
  this.pop = pop
  this.peek = peek
  this.length = length
  this.clear = clear
}

// 实现push（）方法 当向栈中压入一个新元素时，需要将其保存在数组变量中top所对应的位置，
// 然后将top值加1，让其指向数组中下一个空位置。

function push (element) { 
  this.dataStore[this.top++] = element // this.top++ 后进入的元素即在栈顶，栈尾的元素只能是this.dataStore[0]
}

// 这里要特别注意++操作符的位置，它放在this.top的后面，这样新入栈的元素就被放在top
// 的当前值对应的位置，然后再将变量top的值加1，指向下一个位置

// pop()方法与push方法恰好相反--它返回栈顶元素，同时将变量top的值减1

function pop () {
  return this.dataStore[--this.top]
}

// peek（）方法返回数组的第top-1个位置的元素 即栈顶元素 如果对一个空栈调用peek方法，结果为undefined。

function peek () {
  return this.dataStore[this.top - 1] // length为3时，this.top = 3, 即栈顶下标为2
}

// 有时候需要知道栈内存储了多少个元素 length（）方法通过返回变量top值的方式返回栈内元素个数

function length () {
  return this.top
}

// 最后，可以将变量top的值设为0，轻松清空一个栈
function clear () {
  this.top = 0
}

var s = new Stack()
s.push('Dvaid')
s.push('Raymond')
s.push('Bryan')
console.log(s)
console.log('length: ' + s.length())
console.log(s.peek())

var poppde = s.pop()
console.log('poppde element is: ' + poppde)
console.log(s)

s.push('Cynthia')
console.log(s.peek())

s.clear()
console.log('length: ' + s.length())
console.log(s.peek())

s.push('Clayton')
s.push('Cla')
s.push('Clayt')
console.log(s.peek())
console.log(s)

module.exports.createStack = Stack