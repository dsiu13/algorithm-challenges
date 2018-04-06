// Create a function that takes a string and returns a string with its letters in alphabetical order.
// Examples
// "hello" ➞ "ehllo"
// "edabit" ➞ "abdeit"
// "hacker" ➞ "acehkr"
// "geek" ➞ "eegk"
// "javascript" ➞ "aacijprstv"

// Call a split on str into substring
// sort()
// uppercase letters are considered less than lowercase in JS

function alphabetSoup(str){

var splitStr = str.split('');
console.log(splitStr.sort());
}

alphabetSoup("hello");
