// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time.
// Given N, write a function that returns the number of unique ways you can climb the staircase.
// The order of the steps matters.
//
// For example, if N is 4, then there are 5 unique ways:
//
// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2

// N = 1, 1 way to climb: [1]
// N = 2, 2 ways to climb: [1, 1], [2]
// N = 3, 3 ways to climb: [1, 2], [1, 1, 1], [2, 1]
// N = 4, 5 ways to climb: [1, 1, 2], [2, 2], [1, 2, 1], [1, 1, 1, 1], [2, 1, 1]


// What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X?
// For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

// Check what the value of N can be.
// Time complex 2^n

function fib(n) {
  if (n <= 1) {
  return n;
}
  return fib(n-1) + fib(n-2);
};

function fib(n) {
  if (n === 1 || n === 2) {
  return n;
}
  return fib(n-1) + fib(n-2);
};
