// How do you find the largest and smallest number in an unsorted integer array?

// Math.min or Math.max functions expect distinct variables and not an array.
// We use apply() because in front of an array because it
// will convert an array to distinct variables and send them to the function
// [1,2,3,4,5] -> Math.min(1, 2, 3, 4, 5)


// 'destructuring assignment' syntax is a JavaScript expression that makes it possible to unpack
// values from arrays, or properties from objects, into distinct variables.

let arr = [1,2,3,4,5]
let ans = []

minMaxNumber = arr => {
  let min = Math.min.apply(Math, arr)
  let max = Math.max.apply(Math, arr)
  ans.push(min, max)
  return ans
}
