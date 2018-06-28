# Reverse a String

1. Reverse the provided strings.
2. You may need to turn the string into an array before you can reverse it.
3. Your result must be a string.


```
function reverseString(str) {

  return str;
}

//Test Cases
reverseString("hello");
reverseString("Howdy");
reverseString("Greetings from Earth");

The function should return "olleh".

```

## Chaining the Three Built-In Function Together

```
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");
```

## Reverse a String with a Decrementing For Loop

```
function reverseString(str) {
    var newString = "";

    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i]; // or newString = newString + str[i];
    }

    return newString;
}

reverseString('hello');
```

## For Loop Alternative
````
function reverse(str) {
  let reversed = '';
  for(let character of str) {
    reversed = character + reversed;
  }
};

````

## Reduce
```
function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
    }, '')
}


function reverse(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '')
}

```


## Recursion
