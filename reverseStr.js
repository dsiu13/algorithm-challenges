
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
