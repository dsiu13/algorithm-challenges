// Given an array of integers, return a new array such that each element at index i of the new array
// is the product of all the numbers in the original array except the one at i.
//
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].
//
// Follow-up: what if you can't use division?

// [2, 3, 4, 5] => 120
// [2, 4, 5] => 40
// [3, 4, 5] =>  60
// [2, 3, 4] =>  24

// reudce given array
// then divide by missing num/i

const givenArray = [1, 2, 3, 4, 5];
const reducer = (accumulator, currentValue) => accumulator * currentValue;
const productArray = [];

var product = givenArray.reduce(reducer);

function arrayProduct(array) {
  for(i = 0; i < array.length; i++){
    productArray.push(product/array[i]);
    return productArray
  }
}

arrayProduct(givenArray)
