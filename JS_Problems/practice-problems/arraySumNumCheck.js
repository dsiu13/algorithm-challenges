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

// Solution that removes duplicate number pairs. [4,3] & [3,4]
// remove dupes.
let ans = []
let pairs = []

arraySumChecker = (arr, num) => {
  arr.map(x => {
    let res = num - x
    if (res + x === num){
      ans.push(res, x)
    }
  });

  let ans1 = [... new Set(ans)]
  for(i=0; i < ans1.length - 1; i += 2){
    pairs.push([ans1[i], ans1[i+1]])
  }
  return pairs
}
