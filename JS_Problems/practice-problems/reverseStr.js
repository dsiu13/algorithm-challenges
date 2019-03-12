// Reverse the provided strings.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
    return str.split("").reverse().join("");
}
// reverseString("hello"); The function should return "olleh"


// Reverse only words that are >=5 chars
function spinWords(str){
   str = str.split(' ');
    for(var i=0, word; word=str[i]; i++) {
        if(word.length >=5) str[i] = word.split('').reverse().join('');
    }
    return str.join(' ');
}

spinWords("This is a Test")
spinWords("This is Another Test")
// spinWords( "This is another test" )=> returns "This is rehtona test"

// Reverse string in place.
spinWords = str => {

}

// Recursion w/ ternary
function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");

// Recursion
// remember that you won’t have just one call, but several nested calls
// The method hits the IF condition and the most highly nested call returns immediately

function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");

// The depth of the recursion is equal to the length of the String.
// This solution is not the best one and will be really slow if the String is very long and the stack size is of major concern.
