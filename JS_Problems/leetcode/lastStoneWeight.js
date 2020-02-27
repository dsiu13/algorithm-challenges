//Last Stone Weight
// We have a collection of rocks, each rock has a positive integer weight.
//
// Each turn, we choose the two heaviest rocks and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:
//
// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

// Input: [2,7,4,1,8,1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

lastStone = (rocks) => {
  while (rocks.length > 1) {
    // Finding the heaviest rock
    let y = Math.max(...rocks);
    // Removing Heaviest Rock(y)
    rocks.splice(rocks.indexOf(y), 1);

    //2nd Heaviest rock
    let x = Math.max(...rocks);
    // removing 2nd heaviest rock(x)
    rocks.splice(rocks.indexOf(x), 1);

    // X & Y are excluded.
    if (x !== y) {
      rocks.push(y - x);
    }
  }

    return rocks[0] || 0;

};

// Sort solution
var lastStoneWeight = function(stones) {
    if(!stones || stones.length == 0) return 0

    while(stones.length > 1) {
        stones.sort((a, b) => b - a)
        let x = stones.shift() - stones.shift()
        stones.push(x)
    }

    return stones[0]
};
