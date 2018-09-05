// Check if a value is classified as a boolean primitive.
// Return true or false.
//
// Boolean primitives are true and false.

function booWho(bool) {
  if(typeof bool === "boolean"){
    console.log('True')
    return true;
  } else {
    console.log('False')
    return false;
  }
}

booWho(true);
booWho(false);
booWho(42);
booWho('Hello');
booWho([1,2,3]);
