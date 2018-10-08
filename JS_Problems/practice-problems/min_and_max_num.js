// How do you find the largest and smallest number in an unsorted integer array?

let arr = [1,2,3,4,5]
let ans = []

// Math.min or Math.max functions expect distinct variables and not an array.
// We use apply() because in front of an array because it
// will convert an array to distinct variables and send them to the function
// [1,2,3,4,5] -> Math.min(1, 2, 3, 4, 5)


// 'destructuring assignment' syntax is a JavaScript expression that makes it possible to unpack
// values from arrays, or properties from objects, into distinct variables.

maxNumbers = (arr, k) => {
  store = [];
  ans = [];
  for(i=0; i < arr.length - 1; i++){
    store.push(subArr = arr.slice(i, k));
    k++;
  }
  store.map((x, k) => {
    if(x.length >= k){
      ans.push(Math.max.apply(Math, x))
    }
  })
 return ans
}
