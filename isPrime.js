// Check if a Number is Prime

//Prime Check - no square roots
function isPrime(num) {
  for(i = 2; i < num; i++){
    if(num % i === 0) {
      return false;
    }
      return num > 1;
  }
}
