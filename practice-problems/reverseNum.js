// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Native JS methods
function reverseInt(num){
  var int = num.toString()
  var reversedNum = Number(int.split('').reverse().join(''));
  return reversedNum
}
reverseInt(123)
