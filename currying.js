function add(x, y) {
  if (arguments.length < 2) {
    return function(y) {
      return x + y;
    };
  } else

    return x + y;
}

console.log(add(5)(2))
console.log(add(5, 3))

const add = (...a) => {
     if (a.length < 2) {
        return function (y) {
              return a[0] + y;
        };
     } else {
       return a[0] + a[1]
     }
}


console.log(add(5,3))
console.log(add(2,2))
