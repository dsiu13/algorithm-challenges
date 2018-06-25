// Given an array of integers, find the first missing positive integer in linear time and constant space.
// In other words, find the lowest positive integer that does not exist in the array.
// The array can contain duplicates and negative numbers as well.
//
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// Call a sort? split return array and discard anything that is less than or equal to zero.

// Linear Search
function linearSearch(arr, target) {
  for (var i=0; i<array.length; i++) {  // loop to access each ele in array
    if(array[i] === target) { // check index value vs target value
      return array[i] // return our value
    }
  }
  return -1
}

// Binary Search
function binarySearch (list, value) {
  // initial values for start, middle and end
  let start = 0
  let stop = list.length - 1
  let middle = Math.floor((start + stop) / 2)

  // While the middle is not what we're looking for and the list does not have a single item
  while (list[middle] !== value && start < stop) {
    if (value < list[middle]) {
      stop = middle - 1
    } else {
      start = middle + 1
    }

    // recalculate middle on every iteration
    middle = Math.floor((start + stop) / 2)
  }

  // if the current middle item is what we're looking for return it's index, else return -1
  return (list[middle] !== value) ? -1 : middle
}

const list = [2, 5, 8, 9, 13, 45, 67, 99]
console.log(binarySearch(list, 99)) // 7 -> returns the index of the item
