// How do you reverse an arr in place

reversearr = arr => {
  var i = 0,
    n = arr.length,
    middle = Math.floor(n / 2),
    temp = null;

  for (; i < middle; i += 1) {
     temp = arr[i];
     arr[i] = arr[n - 1 - i];
     arr[n - 1 - i] = temp;
  };
}
