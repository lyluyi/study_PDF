/*
  不生成新数组 sort() 传入一个方法
  对数据中的每个元素应用一个函数，可以返回一个值、一组值或者一个新数组
*/

// function compare(num1, num2) {
//   return num1 - num2
// }

// var nums = [3,1,2,100,4,200]
// nums.sort(compare) // 传入compare函数
// console.log(nums)

/* 
  不生成新数组的迭代器方法
*/


/***************************/

// 第一个方法 forEach 对每个元素使用该方法
// function square(num) {
//   console.log(num, num * num)
// }

// var nums = [1,2,3,4,5,6,7]
// nums.forEach(square)

/*************************/

// 第二个方法 every（） 该方法接受一份返回值为布尔类型的函数，对数组中的每个元素使用该函数
// 如果对于所有的元素 均返回为true 则该方法返回true 否则false

// function isEven (num) {
//   return num % 2 === 0
// }

// var nums = [2,4,6,8,10]
// var even = nums.every(isEven)
// if (even) {
//   console.log('all numbers are even')
// } else {
//   console.log('not all numbers are even')
// }

/************************/

// reduce()方法接受一个函数，返回一个值，该方法会从一个累加值开始，不断对累加值和数据
// 中的后续元素调用该函数，直到最后一个元素，并返回得到的累加值。

// function add(runningTotal, currentValue) {
//   return runningTotal + currentValue
// }

// var nums = [1,2,3,4]
// var sum = nums.reduce(add) // 相当于
// /*
//   nums.reduce(function (preVal, curVal) {
//     return preVal + curVal 
//   })
// */

/************************/

/*
  有两个迭代器的方法可以产生新数组：map（）和filter（）。map和forEach有点像，
  对数组中的每个元素使用某个函数。两者的却别是map返回一个新数组
*/

// var grades = [77, 65, 81, 92, 83]

// var newgardes = grades.map(function (item) {
//   return item + 5
// })

// console.log(newgardes)

/**************************/ 

/*
  filter()和every()类似，传入一个返回值为bool类型的函数，和every方法不同的是，当对数组
  中的所有元素应用该函数，结果均为true。filter的方法并不返回true，而是返回一个新数组，该
  数组包含应用该函数结果为true的元素
*/

var arr = [12,45,6,57,99,22]

var brr = arr.filter(function (item) {
  return item > 50
})

console.log(brr)
