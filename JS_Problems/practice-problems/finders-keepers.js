// Create a function that looks through an array (first argument)
// and returns the first element in the array that passes a truth test (second argument).
// If no element passes the test, return undefined.

function findElement(arr, func) {
  // filter through array adding only true values and setting it to num
  let num = arr.filter(func);
  // if statement to check if num returned any true values.
  if(num.length>1){
    return num[0]
  }
  //else returns undefined if entire array was false.
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
