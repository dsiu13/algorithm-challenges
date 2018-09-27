// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
// Find the minimum element.
// The array may contain duplicates.

// sort() is done lexicographically (aka "alphabetically" or in dictionary order.

// nums.sort(function(a,b){return a - b})
// whenever "a" is less than "b", a negative value is returned,
// which results in the smaller elements always appearing to the left of the larger ones, in other words, ascending.

var findMin = function(nums) {
  nums.sort(function(a,b){return a - b})
  return nums[0]
};

// Faster solution
var findMin = function(nums) {
    return help(nums, 0, nums.length - 1)
};

const help = (nums, l, r) => {
    if (nums[l] < nums[r] || l == r) return nums[l]
    const m = l + r >> 1
    const min = Math.min(nums[l], nums[m], nums[r])
    const result = []
    if (nums[m] == min) result.push(help(nums, l, m))
    if (nums[r] == min) result.push(help(nums, m + 1, r))
    return Math.min(...result)
}
