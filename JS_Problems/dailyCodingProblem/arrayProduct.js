// Given an array of integers, return a new array such that each element at index i of the new array
// is the product of all the numbers in the original array except the one at i.
//
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].
//
// Follow-up: what if you can't use division?

// Sum then divide by integer[i]
// [2, 3, 4, 5] => 120
// 2 - [3, 4, 5] =>  60
// 3 - [2, 4, 5] => 40
// 4 - [2, 3, 5] => 30
// 5 - [2, 3, 4] =>  24

// reudce given array
// then divide by missing num/i

const givenArray = [1, 2, 3, 4, 5];

// Sum array via helper function
const reducer = (accumulator, currentValue) => accumulator * currentValue;
const productArray = [];

var product = givenArray.reduce(reducer);

// iterate dividing sum by i
function arrayProduct(array) {
  // if we sub 1 from arr length we need to use <= instead of <
  let length = array.length - 1
  for(i = 0; i <= length; i++){
    productArray.push(product/array[i]);
  }
  return productArray;
}

arrayProduct(givenArray)

// what if you can't use division?

// Helper functions
// Sum
const reducer = (accumulator, currentValue) => accumulator * currentValue;

//store
const productArray = [];

const reducer = (accumulator, currentValue) => accumulator * currentValue;
const productArray = [];


function arrayProduct2(arr) {
  // if we sub 1 from arr length we need to use <= instead of <
  let length = arr.length - 1

  for(i=0; i <= length; i++){
    var filteredAry = arr.filter(function(e) { return e !== arr[i] })
    var sum = filteredAry.reduce(reducer);
    productArray.push(sum)
  }
  return productArray;
}

arrayProduct2(givenArray)
