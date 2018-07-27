// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// make an empty array 'words'
// split input string by spaces
// for each word in array
// Upcase first letter of the word
// join first letter with rest of the string
// push result into 'words' array
// join the 'words' array together


function capitalize(str) {
  const words = [];

  for(let word of str.split(' ')){
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}

capitalize("hello there");


// 2nd solution
// create an empty string called 'result' =>
// instead create 'result' which is the first char of the input string capitalized
// for each char in the string
// IF the character to the left of a spaces - capitalize it and add it to 'results'
// ELSE add it to 'result'

function capitalize(str) {
  let result = str[0].toUpperCase();

  for(let i = 1; i < str.length: i++){
    if(str[i-1] === ' '){
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

capitalize("hello there");
