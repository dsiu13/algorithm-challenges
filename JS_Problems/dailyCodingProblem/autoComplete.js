// Implement an autocomplete system.
// That is, given a query string s and a set of all possible query strings,
// return all strings in the set that have s as a prefix.
// For example, given the query string de and the set of strings
//[dog, deer, deal], return [deer, deal].
// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.


function autocomplete(arr, query){
  let qLength = query.length
  let ans = [];
  arr.map(x => {
    if(x.slice(0, qLength) === query){
      ans.push(x)
    }
  })
   return ans
}

autocomplete([dog, deer, deal], 'de')


// Use BST to match query via transverse, so we don't waste effort on things that don't match?
