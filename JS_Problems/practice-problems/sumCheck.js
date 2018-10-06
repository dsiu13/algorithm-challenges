// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass? 1 Hour time limit

// Probably the worst way to do this.
// Going to be super slow on large data sets.
// Also fails if num in 1st array position doesn't sum to K with any other num in the array.

// 1st Attempt on 6-21-18
var Array = [10, 15, 3, 7];
var K = 17;
var ansArray = [];

function sumCheck(Array, K) {
  for(i=1; i <= Array.length; i++){
    if(Array[0] + Array[i] === K) {
     ansArray.push(Array[0], Array[i])
     console.log(ansArray[0], ansArray[1])
    }
  }
}

sumCheck(Array, K)

// 2nd Attempt 6-22-18 O(n^2)

// our two sum function which will return
// all pairs in the array that sum up to S
function twoSum(arr, S) {

  var sums = [];

  // check each element in array
  for (var i = 0; i < arr.length; i++) {

    // check each other element in the array
    for (var j = i + 1; j < arr.length; j++) {

      // determine if these two elements sum to S
      if (arr[i] + arr[j] === S) {
        sums.push([arr[i], arr[j]]);
      }
    }
  }

  // return all pairs of integers that sum to S
  return sums;

};

twoSum([3, 5, 2, -4, 8, 11], 7);

// 3rd Attempt 6-23-18 Use a Hash Table...
