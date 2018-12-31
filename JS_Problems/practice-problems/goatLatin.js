// A sentence S is given, composed of words separated by spaces.
// Each word consists of lowercase and uppercase letters only.
//
// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)
//
// The rules of Goat Latin are as follows:
//
// If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
// For example, the word 'apple' becomes 'applema'.
//
// If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".
//
// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
// Return the final sentence representing the conversion from S to Goat Latin.

// Input: "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
//
// Input: "The quick brown fox jumped over the lazy dog"
// Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"


// Check first char to see if its a vowel
// if vowel append ma to end, if constant move first char at end then add ma.
// Add A's depending on index position.

// Regex vowel check
// ^[aieouAIEOU].*

// function vowels(str){
//   var vowelRegex = '^[aieouAIEOU].*'
//   var matched = str.match(vowelRegex)
//   if(matched){
//     console.log("True")
//   } else {
//     console.log("False")
//   }
// }

vowelCheck = word => {
  let vowelRegex = '^[aieouAIEOU].*'
  let matched = word.match(vowelRegex);
}

goatLatin = str => {
  let ans = []
  let vowelRegex = '^[aieouAIEOU].*'
  let words = str.split(" ")

  words.map(x => {
    let aCount = "a"
    let matched = x.match(vowelRegex);
    if(matched){
      ans.push(x + "ma" + aCount)
      aCount + "a"
    } else {
      ans.push(x.substr(1) + x.substr(0, 1) + "ma" + aCount)
      aCount + "a"
    }
    console.log(ans)
  });
};

goatLatin("I am the machine")
