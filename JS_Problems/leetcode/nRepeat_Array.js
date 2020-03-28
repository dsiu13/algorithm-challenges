// 961. N-Repeated Element in Size 2N Array
// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.
//
// Return the element repeated N times

// Example 1:
//
// Input: [1,2,3,3]
// Output: 3
// Example 2:
//
// Input: [2,1,2,5,3,2]
// Output: 2
// Example 3:
//
// Input: [5,1,5,2,5,3,5,4]
// Output: 5
//
//
// Note:
//
// 4 <= A.length <= 10000
// 0 <= A[i] < 10000
// A.length is even

// console.log(`${property}: ${freq[property]}`);
// console.log(`${property}`)

// Runtime: 80 ms, faster than 39.79% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
// Memory Usage: 40.5 MB, less than 6.25% of JavaScript online submissions for N-Repeated Element in Size 2N Array

// O(n)?
var repeatedNTimes = function(A) {
  let ans = 0;
  let count = 0;
  let freq = { };

  for (let i = 0, j = A.length; i < j; i++) {
     if (freq[A[i]]) {
        freq[A[i]]++;
     }
     else {
        freq[A[i]] = 1;
     }
  }

  for (const property in freq) {

      if(`${freq[property]}` > count) {
        count = `${freq[property]}`;
        ans = `${property}`;
      };
  };
    return ans
};

repeatedNTimes([8,3,2,3])
