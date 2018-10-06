// How do you find all pairs of an integer array whose sum is equal to a given number?
// Assume no numbers greater than given 'num' arg?
// if given arg is 7 => [3,4] and [4,3] are the same


// Doesn't account for duplicate number pairs
let ans = []

arraySumChecker = (arr, num) => {
  arr.map(x => {
    let res = num - x
    if (res + x === num){
      ans.push([res, x])
    }
  })
  return ans
}

// Solutoin for removing duplicate number pairs
