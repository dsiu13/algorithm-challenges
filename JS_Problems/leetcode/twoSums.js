// 1. Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// failed test cases 2 elements array, array with mulitple solutions
// let twoSums = (arr, target) => {
//   let res = [];
//   let i = 0
//   while (i < arr.length - 1) {
//     arr.map(x => {
//       if(x + arr[i + 1] === target){
//           res.push(arr.indexOf(x))
//           res.push(arr.indexOf(arr[i + 1]))
//       }
//     });
//
//     i++
//   };
//   return res
// };

twoSums([2, 7, 11, 15], 9)

// The right way to do it....
// map look up is 0(1)
var twoSum = (nums, target) => {
  const map = new Map()
  for(let i = 0; i < nums.length; i++){
    let val = nums[i];
    if(map.has(c=val)){
      return [map.get(val), i];
    }
    let diff = target - val
    map.set(diff, i);
  };
};
