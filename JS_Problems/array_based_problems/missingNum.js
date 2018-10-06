// Find the missing number in a given integer array of 1 to 100

// Single missing integer
let arr = [1,2,3,4,6,7,8,9,10]
let completeArr = [...Array(10).keys()]

function missingNum(array) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let sum = array.reduce(reducer);
  let totalSum = completeArr.reduce(reducer)
  let ans = totalSum - sum
  return ans
}

// Multiple missing integers in a range
function missingNums(arr) {
    var missingNums = [];
    for(var i=Math.min(...arr); i<Math.max(...arr); i++){
     if(arr.indexOf(i) === -1){
       missingNum.push(i);
     }
  }
  return missingNums
}
