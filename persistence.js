let count = 0;

let persist = (num) => {
  if (num.toString().length == 1) {
    return count;
  } else {
    count++;
    var parseNum = 1;
    var numString = num.toString().split("");
    for (var i = 0; i < numString.length; i++) {
      parseNum *= parseFloat(numString[i]);
    }
    return persist(parseFloat(parseNum));
  }
}
console.log(persist(39));

///////////////////////////////////////

function MultiplicativePersistence(num) {

       function multiply(n){
           return n.reduce(function(a,b){return a*b;});
       }
       var count =0;

       while(num.toString().length > 1) {
           num= num.toString().split("");
           num = multiply(num);
           count++;
        }
        return count;
    }

console.log(MultiplicativePersistence("39"));
