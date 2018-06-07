//FOR Loop
function findLongestWordLength(str) {
  var splitArr = str.split(" ")
  var longestWord = 0
  for(i=0; i < splitArr.length; i++){
    if(splitArr[i].length > longestWord){
      longestWord = splitArr[i].length;
    }
  }
  console.log(longestWord);
  return longestWord;
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
