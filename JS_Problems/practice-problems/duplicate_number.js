// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive),
// prove that at least one duplicate number must exist.
// Assume that there is only one duplicate number, find the duplicate one.
//
// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.
// Works with multiple sets of dupes

function findDuplicates(data) {

  let result = [];

  data.forEach(function(element, index) {

    // Find if there is a duplicate or not
    if (data.indexOf(element, index + 1) > -1) {

      // Find if the element is already in the result array or not
      if (result.indexOf(element) === -1) {
        result.push(element);
      }
    }
  });

  console.log (result);
}
