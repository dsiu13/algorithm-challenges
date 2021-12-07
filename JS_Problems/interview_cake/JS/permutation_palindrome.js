// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴
//
// You can assume the input string only contains lowercase letters.
//
// Examples:
// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

function hasPalindromePermutation(theString) {

  sortedStrArr = theString.split("").sort();

  let map = new Map();

  sortedStrArr.forEach(a => map.set(a, (map.get(a) || 0) + 1));

  let uniqueChars = sortedStrArr.filter(a => map.get(a) <= 1);

  let count = uniqueChars.length

  if(count <= 1) {
    return true;
  } else {
    return false;
  }

};

hasPalindromePermutation("civic")

// console.log([...new Set(sortedStrArr)]);
