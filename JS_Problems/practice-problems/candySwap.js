// Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th bar of candy that Alice has, and B[j] is the size of the j-th bar of candy that Bob has.
//
// Since they are friends, they would like to exchange one candy bar each so that after the exchange, they both have the same total amount of candy.
// (The total amount of candy a person has is the sum of the sizes of candy bars they have.)
//
// Return an integer array ans where ans[0] is the size of the candy bar that Alice must exchange,
// and ans[1] is the size of the candy bar that Bob must exchange.
//
// If there are multiple answers, you may return any one of them.
// It is guaranteed an answer exists.

let i = [1,1]
let j = [2,2]

const reducer = (accumulator, currentValue) => accumulator + currentValue;
let candyA = 0;
let candyB = 0;
let candyGoal = 0;

candy = (i, j) => {

candyA = i.reduce(reducer);
candyB = j.reduce(reducer);

candyGoal = (candyA + candyB) / 2

console.log(candyGoal)
}

candy(i, j)
