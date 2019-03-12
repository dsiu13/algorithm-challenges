// Say you have an array for which the ith element is the price of a given stock on day i.
//
// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e.,
// buy one and sell one share of the stock multiple times).
//
// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
//
// Example 1:
//
// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Example 2:
//
// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:
//
// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.


// Single Buy & Sell Order

let market = [7,1,5,3,6,4];

let low = 4;
let day = 0;
let profit = 0;

stocks = arr => {
  arr.map(x => {
    if ( x <= low ){
      low = x
      day = arr.indexOf(x)
    }
  });

  let buyDate = market.slice(day + 1, market.length + 1);

  buyDate.map(y => {
    if(y - low >= profit) {
      profit = y - low;
    }
  })
  return profit;
}

stocks(market)

// Multiple Buy & Sell orders if theres more than one good low
