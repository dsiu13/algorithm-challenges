// Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.
//
// Note:
// The given integer is guaranteed to fit within the range of a 32-bit signed integer.
// You could assume no leading zero bit in the integer’s binary representation.

function complementNum(num){
  // Radix - An integer between 2 and 36 that represents the radix
  // (the base in mathematical numeral systems)
  // 2 - The number will show as a binary value
  // 8 - The number will show as an octal value
  // 16 - The number will show as an hexadecimal value
  var str = num.toString(2)
  // res store
  var res = "";

  // for…of to iterate over the values
  // If condition is true, the operator returns the value of expr1;
  // otherwise, it returns the value of expr2.
  // ternary operator if 1 replace with '0' else '1'
  for (var i of str) {
    if(res += i === 1 ? '0' : '1')
  }
  // convert back into int and convery
  // can take two args - string, radix
  return parseInt(result, 2)
}
