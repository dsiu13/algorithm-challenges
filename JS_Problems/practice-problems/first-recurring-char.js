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

  var sortStr = str.split("").sort()
  var length = sortStr.length

  for(i=0; i < length; i++){
    if(sortStr[i] === sortStr[i + 1]){
      console.log(sortStr[i],sortStr[i + 1])
    }
  }
}

firstRecurring("abca")

// Hash via maps and keys?
