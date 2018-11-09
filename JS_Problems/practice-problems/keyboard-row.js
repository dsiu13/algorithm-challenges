// Given a List of words, return the words that can be typed using letters
// of the alphabet on only one row's of an American keyboard.

// row 1 - 'qwertyuiop'
// row 2 - 'asdfghjkl'
// row 3 - 'zxcvbnm'

// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]

var findWords = (words) => {
  const kbRows = [
    new Set('qwertyuiop'.split())
    new Set('asdfghjkl'.split())
    new Set('zxcvbnm'.split())
  ];
  const ans = [];

  const checker = (word, row) => {
    for(let i = 0; i < word.length; ++i) {
      if(!row.has(word[i].toLowerCase())){
        return false;
      }
    }
  };
  ans.push(word);

  words.forEach((word) => {
     // For each word check which row the first letter is in and send it to checking function.
      kbRows.forEach((row) => {
          if (row.has(word.charAt(0).toLowerCase())) checkWord(word, row);
      });
  });

  return ans;  

};
