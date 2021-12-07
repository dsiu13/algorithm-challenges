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



  function duplicateSpaceEdition(numbers) {

    return [...new Set(numbers)];

  };



  duplicateSpaceEdition(1,2,2,3)
