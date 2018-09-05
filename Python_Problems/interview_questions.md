# List vs Tuples
- Lists are mutable, and can be edited. Tuples are immutable.
- Lists are slower than tuples.
- List Syntax: list = [10,'Hello', 88]
- Tuples Syntax: tuples = (10,'Hello', 88)

# Python Key Features
- Python is an interpreted language. Python does not need to complied to run like C. Other interpreted languages are Ruby, PHP, JavaScript
- Dynamically typed, Variable types don't need to be stated before declaration.
- Python is good at Object Orientated Programming(OOP). It allows definition of classes along with composition and inheritance. Python does not have access to specifiers (C++ => public, private)
- Python code is often shorter and can be written in fewer lines. It runs slower than most complied languages however. Python does have access to C based extensions.
- Wide range of applications, web apps, automation, scientific modeling, big data. Can be used a "Glue" to get other languages to work with each other

# Deep vs Shallow Copy

## Shallow
- Shallow copy is used when a new instance type gets created and it keeps the values that are copied in the new instances.
- Shallow copy is used to copy the reference pointers just like it copies the values. These references point to the original objects and the changes made in any member of the class will also affect the original copy of it.
- Shallow copy allows faster execution of the program and it depends on the size of the data that is used.

## Deep
- Deep copy is used to store the values that are already copied.
- Deep copy doesn’t copy the reference pointers to the objects. It makes the reference to an object and the new object that is pointed by some other object gets stored.
- The changes made in the original copy won’t affect any other copy that uses the object.
- Deep copy makes execution of the program slower due to making certain copies for each object that has been called.
