/*
  JavaScript只支持一维数组，但是通过在数组里保存数组元素的方式，可以轻松创建多维数组
*/

// 扩展JavaScript数组对象，为其新增一个新方法，根据该方法传入的参数
// 设定了数组的行数、列数和初始值。下面这个方法的定义：

// Array.matrix = function (numrows, numcols, initial) {
//   var arr = []
//   for (var i = 0; i < numrows; ++i) {
//     var columns = []
//     for (var j = 0; j < numcols; ++j) {
//       columns[j] = initial
//     }
//     arr[i] = columns
//   }
//   return arr
// }

// var nums = Array.matrix(5,6,0)
// console.log(nums)

/*
[ [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ] ]
*/

/*****************************/

/*
  以数组grades为例，每一行对应一个学生的成绩记录，将该学生的所有成绩相加，然后除以科目数得到该学生的
  平均成绩。
*/

var grades = [[89,77,78],[76,82,81],[91,94,89]]
var total = 0
var average = 0.0

for (var row = 0; row < grades.length; ++row) {
  for (var col = 0; col < grades[row].length; ++col) { 
    total += grades[row][col]
  }
  average = total / grades[row].length
  console.log('Student' + parseInt(row + 1) + ' average:' + average.toFixed(2))
  total = 0
  average = 0.0
}