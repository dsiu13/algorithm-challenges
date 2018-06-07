// Create a function that looks through an array (first argument)
// and returns the first element in the array that passes a truth test (second argument).
// If no element passes the test, return undefined.

var array = [1, 17, 3, 1, 9, 8]

function findersKeepers(array){
  for(i=0; i<array.length; i++){
    if(array[i] % 2 === 0){
      console.log(array[i]);
      break;
    } else if(array[i] % 2 ===! 0){
      return undefined;
    }
  }
};

findersKeepers(array);
