// Find the longest word in a given string

//FOR Loop
function findLongestWordLength(str) {
  var splitArr = str.split(" ")
  var longestWord = 0;
  word = ""
  for(i=0; i < splitArr.length; i++){
    if(splitArr[i].length > longestWord){
      longestWord = splitArr[i].length;
      word = splitArr[i];
    }
  }
  return word;
}

// Map()
function longestWord(str){
  var splitArr = str.split(" ")
  var longestWord = 0;
  var word = ""
  splitArr.map(x => {
    if(x.length > longestWord){
      longestWord = x.length
      word = x
    };
  });
  return word
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// sort()
function findLongestWord(str) {
  var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0].length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

// reduce()
function findLongestWord(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
