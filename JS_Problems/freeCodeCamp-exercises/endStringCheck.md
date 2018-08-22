# **Check the Ending of a String**
- Check if a string (first argument, str) ends with the given target string (second argument, target).

## **Starter Code**

````

function confirmEnding(string, target) {
  return string;
}
confirmEnding("Bastian", "n");


confirmEnding("Bastian", "n") should return true.
confirmEnding("Connor", "n") should return false.

````

## **1. Confirm the Ending of a String with Built-In Functions - with substr()**
- The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.

- Why are you using string.substr(-target.length)?
 If the target.length is negative, the substr() method will start the counting from the end of the string, which is what you want in this code challenge. You don’t want to use string.substr(-1) to get the last element of the string, because if the target is longer than one letter:

````
confirmEnding("Open sesame", "same")

````
the target won’t return at all.

- So here string.substr(-target.length) will get the last index of the string ‘Bastian’ which is ‘n’.
- Then you check whether string.substr(-target.length) equals the target (true or false).

## Code Snippet
````

function confirmEnding(string, target) {
  // Step 1. Use the substr method
  if (string.substr(-target.length) === target) {

  // What does "if (string.substr(-target.length) === target)" represents?
  // The string is 'Bastian' and the target is 'n'
  // target.length = 1 so -target.length = -1
  // if ('Bastian'.substr(-1) === 'n')
  // if ('n' === 'n')

  // Step 2. Return a boolean (true or false)
    return true;
  } else {
    return false;
  }
}

confirmEnding('Bastian', 'n');

````

## **Solution #1 with a TERNARY OPERATOR**

````

function confirmEnding(string, target) {
  return string.substr(-target.length) === target;
}
confirmEnding('Bastian', 'n');

````

## **2: Confirm the Ending of a String With Built-In Functions — with endsWith()**
- The endsWith() method determines whether a string ends with the characters of another string, returning true or false as appropriate.
- This method is Case Sensitive

````

function confirmEnding(string, target) {
  // We return the method with the target as a parameter
  // The result will be a boolean (true/false)
  return string.endsWith(target); // 'Bastian'.endsWith('n')
}
confirmEnding('Bastian', 'n');

````
