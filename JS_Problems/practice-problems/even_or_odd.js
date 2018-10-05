// Determine if a number is Even or Odd without % or Division

function evenOdd(num){
  // grab absolute val of num arg
  // decrement by 2. if num equals 0 its even else its odd
    for (var i = Math.abs(num); i >= 0; i -= 2){
      if (i === 0){
        console.log("Even")
      } if (i === 1) {
        console.log("Odd")
      }
    }
};

evenOdd(-6)

/////////////////////////////////////////////////

function oddEven(num) {
  var i = Math.abs(num)

  while (i >= 0) {
    if (i === 0) {
      console.log("Even")
    }
    if (i === 1) {
      console.log("Odd")
    }
    i -= 2
  }
};

oddEven(7)

///////////////////////////////////////////////////

// Bitwise Operators

function oddOrEven(x) {
    return ( x & 1 ) ? "odd" : "even";
}
