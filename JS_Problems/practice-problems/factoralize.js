// factorialize a number
// Return the factorial of the provided integer.
// If the integer is represented with the letter n,
// a factorial is the product of all positive integers less than or equal to n.
//
// Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120


function factorialize(num) {
  // if n = 0 or 1 we return 1
  if(num === 0 || num === 1){
    return 1;
  }
  // start at the end of the array
  // decrement loop from the highest number given in 'n'
  // store it
  for(var i = num - 1; i >= 1; i--){
    num = num * i;
  }
  return num;
}

factorialize(5);
