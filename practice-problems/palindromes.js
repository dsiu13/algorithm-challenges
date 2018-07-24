// Write a function that returns true if the passed in string is
// a palindrome and false if it isn’t. (should be case-insensitive)

// No Regex
function palindrome(str){
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// No Regex - every()
function palindrome(str){
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

// With Reverse
function palindrome(str){
  var re = /[\W_]/g;
  var lowCaseStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowCaseStr.split('').reverse().join('');
  return reverseStr === lowCaseStr
}

// Without Reverse
function palindromeTwo(str) {
    var newString = "";
    var re =  /[\W_]/g;
    var regExStr = str.toLowerCase().replace(re,'');

    for (var i = regExStr.length - 1; i >= 0; i--) {
        newString += regExStr[i];
    }
    return newString === regExStr;
}

//Better Without Reverse?
function palindrome(str) {
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;

 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   };
 };
 return true;
}

console.log(palindrome("never odd or even")); // True
console.log(palindrome("N O P E")) // False
console.log(palindrome("_(: /-\ :)–")) // True
console.log(palindrome("not a palindrome")) // False
console.log(palindrome("A Man, a Plan, a Canal. Panama")) // True
