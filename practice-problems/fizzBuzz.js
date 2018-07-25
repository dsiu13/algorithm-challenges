// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// For Loop
function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      print('FizzBuzz');
    } else if (i % 3 === 0) {
      print('Fizz');
    } else if (i % 5 === 0) {
      print('Buzz');
    } else {
      print(i);
    }
  }
}

function fizzBuzz(){

}
