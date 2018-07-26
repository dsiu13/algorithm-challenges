// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  var re = /[\W_]/g;
  let a = stringA.replace(re,'').toLowerCase().split('').sort().join('');
  let b = stringB.replace(re,'').toLowerCase().split('').sort().join('');

  if(a === b){
    return true
    console.log(true)
  } else {
    return false
  }
}

anagrams('rail safety', 'fairy tales')
