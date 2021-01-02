// 7. Reverse Integer
// Given a 32-bit signed integer, reverse digits of an integer.
//
// Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

let reverseNumber = x => {
  let reversedNum = [];
  let numStr = x.toString().split("");
  let i = numStr.length - 1;

  numStr.map(x => {
    if (x == "-"){
      reversedNum.push(x)
    } else {
      reversedNum.push(numStr[i])
      i--
    }
  });
  let ans = parseInt(reversedNum.join(""));
  return ans;
};
