// Find the first recurring character in the given string!
//
// A variation of this problem: find the first NON-recurring character
// "ABCA" => A
// "ABACB" => B
// "ABC" => Null/None/etc..


// Set() string?
// Compare the two sets?

// Split str, sort, iterate through looking for two that match next to each other.
function firstRecurring(str){
  const re = /[^\W]/g;
  // replace may be overkill?
  var sortStr = str.replace(re, '')
                   .split("")
                   .toLowerCase()
                   .sort()
                   
  var length = sortStr.length

  for(i=0; i < length; i++){
    if(sortStr[i] === sortStr[i + 1]){
      return sortStr[i]
    }
  }
}

firstRecurring("abca")

// Hash via maps and keys?
