// Given a string, find the palindrome that can be made by inserting the fewest number
// of characters as possible anywhere in the word.
// If there is more than one palindrome of minimum length that can be made,
// return the lexicographically earliest one (the first one alphabetically).

// For example, given the string "race", you should return "ecarace",
// since we can add three letters to it (which is the smallest amount to make a palindrome).
// There are seven other palindromes that can be made from "race" by adding three letters,
// but "ecarace" comes first alphabetically.

// As another example, given the string "google", you should return "elgoogle".

var shortestPalindrome = function (s) {
    var chars = s.split(''),
        reversed = chars.slice().reverse();
    if (isPalindrome(s)) return s;
    for (var i = 0, n = chars.length - 1; i < n; i++) {
        var joined = reversed.slice(0, i + 1).concat(chars).join('');
        if (isPalindrome(joined)) {
            return joined;
        }
    }
};

var isPalindrome = function (str) {
    var chars = str.split('');
    for (var i = 0, n = Math.floor(chars.length / 2); i < n; i++) {
        if (chars[i] !== chars[chars.length - i - 1]) {
            return false;
        }
    }
    return true;
};
