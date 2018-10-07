// Given an array of integers and a number k, where 1 <= k <= length of the array,
// compute the maximum values of each subarray of length k.
//
// For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
//
// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)

// k = array size
//
// Do this in O(n) time and O(k) space.
// You can modify the input array in-place and you do not need to store the results.
// You can simply print them out as you compute them.

largestArraySum = (arr, k) => {
  store = [];
  ans = [];

// loop through given arr and slice based on given k size
// push to a store arr
  for (i = 0; i < arr.length - 1; i++) {
    store.push(arr.slice(0 + i, i + k));
  };

// loop through the store
// grab any sub-array whose length matches k
// then we get the largest number in the sub-array and push it to our ans array
  for (i = 0; i < store.length - 1; i++) {
    if (store[i].length - 1 >= k - 1) {
      ans.push(Math.max.apply(Math, store[i]));
    };
  };

  return ans;
};
