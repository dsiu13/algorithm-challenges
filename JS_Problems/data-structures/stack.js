// LIFO (LAST IN FIRST OUT) Stack
// A simple array object already has the two basic methods needed to create a LIFO stack push and pop.
// The push method will add any object to the top of the stack and the pop method will remove it.
// To treat an array as a LIFO stack you simply create an instance and use push and pop.
// Stack functions: push, pop. peek, length.

// You can use these methods on arrays

// Time Complexity
// Space  Avg: O(n) Worst: O(n)
// Search Avg: O(n) Worst: O(n)
// Insert Avg: O(1) Worst: O(1)
// Delete Avg: O(1) Worst: O(1)

//Example stack
var stack = new Array();
stack.push("A");
stack.push("B");
stack.push("C");
alert(stack.pop());
alert(stack.pop());
alert(stack.pop());

 // If you really want to create a stack object that can only be used as a stack
 // then you have to encapsulate an Array and expose only the push and pop methods.

 function Stack() {

   this.stac = new Array();

   this.pop=function(){
     return this.stac.pop();
   }

   this.push=function(item){
     this.stac.push(item);
   }

}

var stack=new Stack();
stack.push("A"); // 0
stack.push("B"); // 1
stack.push("C"); // 2 - Last In First Out

alert(stack.pop());
alert(stack.pop());
alert(stack.pop());

// If you make the stack Array object private using a closure say
// then the only operations allowed on Stack are Push and Pop.

//Notice that while we refer to the "top of the stack"
// Push adds the object to the "end" of the array and
// Pop removes the final element.

var stack=new Stack();
stack.push("A"); // Index 0
stack.push("B"); // Index 1
stack.push("C"); // Index 2 - Last In First Out

// If we Push to this stack with A, B, C already in the Array. It gets added to the "end"
stack.push("D"); // Index 3

// if you try to pop a value that doesn't exist i.e. pop an empty stack the result is undefined
