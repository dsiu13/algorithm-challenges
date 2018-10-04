// Given an integer array nums, find the contiguous subarray
// (containing at least one number) which has the largest sum and return its sum.
//
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// fails with [-2,1]
function maxSubArray(nums){
  let counter = 0;
  let max = -Infinity
  nums.map(x => {
    counter += x;
    if (counter > max){
      max = counter;
    } else if (counter < 0){
      counter = 0;
    }
  })
  return max
}

console.log(maxSubArray([-2,1]))
