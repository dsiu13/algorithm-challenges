// Find a duplicate, Space Edition™.
//
// We have an array of integers, where:
//
// The integers are in the range 1..n
// The array has a length of n+1
// It follows that our array has at least one integer which appears at least twice.
// But it may have several duplicates, and each duplicate may appear more than twice.
//
// Write a method which finds an integer that appears more than once in our array.
// Don't modify the input! (If there are multiple duplicates, you only need to find one of them.)


// I think these count as modifying the input?
function duplicateSpaceEdition(numbers) {

  return [...new Set(numbers)];

};


function duplicateSpaceEdition(intArr) {

  let map = new Map();

  intArr.forEach(a => map.set(a, (map.get(a) || 0) + 1));
  let dupeArr = [...new Set(intArr.filter(a => map.get(a) > 1))];

  return dupeArr;

};
