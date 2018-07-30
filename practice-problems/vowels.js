// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
//   don't count 'y'


//[] in regex if this string contains anything in the brackets let us know
// g => tells it not to stop at the first match found in the string
// i => case insenitive
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}


// 2nd solution
function vowels(str) {
  let count = 0;
  // Array over a string 'aeiou'
  const checker = ['a', 'e', 'i', 'o', 'u'];

  for(let char of str.toLowerCase()) {
    if(checker.includes(char)){
      count++;
    }
  }
  return count;
}
