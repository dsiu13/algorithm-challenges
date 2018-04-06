// Write a  function that can take in one or two arguments and adds them together
// add(6)(2) => 8
// add(5, 3) => 8

function add(x, y) {
  if (arguments.length < 2) {
    return function(y) {
      return x + y;
    };
  } else

    return x + y;
}

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
