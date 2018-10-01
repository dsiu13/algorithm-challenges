// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples ----------------------------------------
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// 1st solution
function anagrams(stringA, stringB) {
  // regex to clean our input
  const re = /[^\W]/g;

  // alphabetical sort
  let a = stringA.replace(re, '')
                 .toLowerCase()
                 .split('')
                 .sort()
                 .join('');

  let b = stringB.replace(re, '')
                 .toLowerCase()
                 .split('')
                 .sort()
                 .join('');

// checked the sorted string against each other
   if(a === b ){
     return true;
   } else {
     return false;
   }

}

// 1st solution using Helper function
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB;
}

function cleanString(str){
  const re = /[^\W]/g;
  return str.replace(re, '').toLowerCase()
                            .split('')
                            .sort()
                            .join('')
}

// 2nd solution
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

   if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
     return false;
   };

   for (let char in aCharMap){
     if(aCharMap[char] !== bCharMap[char]){
       return false;
     };
   };

   return true;

}

//Helper function
function buildCharMap(str){
  const charMap = {};
  const re = /[^\W]/g;

  for(let char of str.replace(re, '').toLowerCase()){
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;

}
