// First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.
//
// So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:
//
// The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
// The values are the price (in US dollars) of one share of Apple stock at that time.
// So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.
//
// Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

// const stockPrices = [10, 7, 5, 8, 11, 9];
//
// getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)

let moneyMaking = arr => {

  let stockPrices = arr;
  let lowestPrice = arr.sort(function(a, b){return a-b});
  let buyIn = [];

// for(let i = 0; i < stockPrices.length - 1; i++) {
//   if(stockPrices[i] == lowestPrice[0]) {
//       console.log(stockPrices.indexOf(lowestPrice[0]));
//   };
// };

  stockPrices.map(x => {
    if (x == lowestPrice[0]) {
      let buyIn = x.toString();
      console.log(stockPrices.indexOf(x.toString()))
    };
  });

};

moneyMaking([10, 7, 5, 8, 11, 9])
