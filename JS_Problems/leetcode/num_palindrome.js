// 9. Palindrome Number
// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
//
// Example 1:
//
// Input: 121
// Output: true
// Example 2:
//
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
//
// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:
//
// Coud you solve it without converting the integer to a string? No :(

// Runtime: 196 ms
// Mem: 45.6 mb
var isPalindrome = function(x) {
  let numOne = x;
  let numTwo = x.toString().split('').reverse().join('');

  return (numOne === parseInt(numTwo) ? true : false);

};

// 204ms
let numPalindrome = nums => {
  if (nums < 0) {
    return false;
  } else {
    for(let i = nums; i >= 1; i = Math.floor(i / 10)) {
      reverse = reverse * 10 + i % 10;
    };
      return reverse === nums;
  };

};

// using Pop()
var isPalindrome = function(x) {
    const arr = String(x).split('');

    while (arr.length > 1) {
        if (arr.shift() !== arr.pop()) {
            return false;
        }
    }

    return true;
};
