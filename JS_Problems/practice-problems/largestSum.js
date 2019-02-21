// Given a list of integers, write a function that returns the
// largest sum of non-adjacent numbers. Numbers can be 0 or negative.
//
// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5.
// [5, 1, 1, 5] should return 10, since we pick 5 and 5.
//
// Follow-up: Can you do this in O(N) time and constant space?

largestNum = (arr) => {
  let sum1 = 0
  let sum2 = 0
  for (i = 0; i < arr.length; i += 2) {
    sum1 += arr[i]
  };

    for (i = 1; i < arr.length; i += 2) {
    sum2 += arr[i]
  };

  if(sum1 > sum2){
    return sum1
  } else {
    return sum2
  }
}

largestNum([1,2,3,4,5])


largestNum2 = arr => {
  let arr1 = [];
  let sum1 = 0;
  let sum2 = 0;

  function sumArr(arr) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for (i = 0; i < arr.length; i += 2) {
      arr1.push(arr[i])
    };
    console.log(arr1.reduce(reducer))
  }
