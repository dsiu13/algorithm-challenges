// Sum all the values in a given array ///////////////

Array.prototype.sum = function () {
    var total = 0;
    var i = this.length;

    while (i--) {
        total += this[i];
    }

    return total;
}

////////////////////////////////////////////////////

arraySum2 = (arr) => {
  // storage var
  let count = 0;

  // for loop, grab each int, and add it to our storage var
  for (var i = 0; i < arr.length; i++){
    count += arr[i];
  }
}

///////////////////////////////////////////////

sum = array.reduce((pv, cv) => pv + cv, 0);


/////////////////////////////////////////////////

arraySum3 = (arr) => {
  count = 0
  arr.map(x => count += x )
  return count
}
