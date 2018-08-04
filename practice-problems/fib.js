// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Iterative solution
// Linear runtime because its 1:1. every input has the algorithm do one more thing
function fib(n) {
  const result = [0, 1];

  for(let i = 2; i <= n; i++){
    const a = result[i - 1]
    const b = result[i - 2]

    result.push(a + b);
  }
  return result[n];
}

// Recursive - 2^n
// exponential runtime, significant increase in function calls
function fib(n) {
  if(n < 2){
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

// refactored recursive (Memoization)
// the fib function is being called multiple times with the same arguments
// Memoization -> store the args of each function call along with the result
// if the function is called again with the same arguments, return the precomputed result
// instead of running the function again
// slow fib function -> Memorizer -> fast memoized fib function

function memoizer(fn) {
  // faster function than original
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = results;

    return result;
  }
}

function slowFib(n) {
  if(n < 2){
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
