// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is
// that adjacent houses have security system connected and it
// will automatically contact the police if two adjacent houses were broken into on the same night.
//
// Given a list of non-negative integers representing the amount of money of each house,
// determine the maximum amount of money you can rob tonight without alerting the police.

// Ex 1
// Input: [1,2,3,1]
// Output: 4
// Houses: house1(1) + house3(3) = $4

// index[0] + index[2]

// Ex 2
// Input: [2,7,9,3,1]
// Output: 12
// Houses: house1(2) + house3(9) + house5(1) = $12
// index[0] + index[2] + index[4]

// Keep in mind
// [1,3,1]
// [2,1,1,2]


// Solution
var rob = function(nums) {
    let len = nums.length,
        result = [],
        i;

    (len ? 0 : 0);
    (len ? 1 : nums[0]);
    result[0] = nums[0];
    result[1] = Math.max(nums[1], nums[0]);

    for(i = 2; i < len; i++) {
        result[i] = Math.max(result[i - 2] + nums[i], result[i - 1]);
    }

    return result[len - 1];
};
