// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.

// persistence(39) === 3 because 3*9 = 27, 2*7 = 14, 1*4=4
//                        and 4 has only one digit

//  persistence(999) === 4 because 9*9*9 = 729, 7*2*9 = 126,
//                         1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0  because 4 is already a one-digit number


let count = 0;

let persist = (num) => {
  if (num.toString().length == 1) {
    return count;
  } else {
    count++;
    var parseNum = 1;
    var numString = num.toString().split("");
    for (var i = 0; i < numString.length; i++) {
      parseNum *= parseFloat(numString[i]);
    }
    return persist(parseFloat(parseNum));
  }
}

console.log(persist(39));

/////////////////////////////////////////////////

function MultiplicativePersistence(num) {

  function multiply(n) {
    return n.reduce(function(a, b) {
      return a * b;
    });
  }
  var count = 0;

  while (num.toString().length > 1) {
    num = num.toString().split("");
    num = multiply(num);
    count++;
  }
  return count;
}

console.log(MultiplicativePersistence("39"));
