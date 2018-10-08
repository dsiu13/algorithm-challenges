// Given an array of strings, group anagrams together.
//
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

groupAnagrams = strs => {
// mapping of a string to an array of strings, e.g. "ate" => ["eat", "ate", "tea]
  let mapping = {};
  for (let word of strs) {
    // sort each word
    let sorted = word.split("").sort().join("");

    if (!mapping[sorted]) {
      // if sorted doesn't exist in the mapping, add it
      mapping[sorted] = [word];
    } else {
      // else, push the non-sorted word to the array associated with sorted
      mapping[sorted].push(word)
  }

  return Object.values(mapping);

}
