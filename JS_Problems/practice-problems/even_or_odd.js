// Determine if a number is Even or Odd without % or Division

function evenOdd(num){
    for(var i  = Math.abs(num); i >= 0; i -= 2){
      if(i === 0){
        console.log("Even")
      } if (i === 1) {
        console.log("Odd")
      }
    }
};

evenOdd(-6)

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
