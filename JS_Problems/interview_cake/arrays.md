# Arrays - Interview Cake
- Fast lookups, retrieving the element at the given index takes O(1), regardless of array length
- Fast appends, Adding a new element at the end of the array takes O(1)
- Fixed size is a weakness, need to specify how many elements you're going to store in your array.
- Inserts and Deletes are costly. Worst case O(n)
- Javascript and Python have no bare-bones array
```
// instantiate an array that holds 10 integers - Java Example
int gasPrices[] = new int[10];

gasPrices[0] = 346;
gasPrices[1] = 360;
gasPrices[2] = 354;

```
### Quick Ref Table

|        | Worst Case |
|:------:|:----------:|
|  Space |    O(n)    |
| Lookup |    O(1)    |
| Append |    O(1)    |
| Insert |    O(n)    |
| Delete |    0(n)    |

## Slicing
- Array slicing involves taking a subset from an array and allocating a new array with those elements.
- Slicing has a time and space cost. You are allocating a new array and copying elements from the original array to the new array. This takes O(n) time and O(n) space, where n is the number of elements in the resulting array.

```
// Javascript - You can omit endIndex to grab everything from start to end
my.Array.slice(startIndex, endIndex);

// Python 3.6
  my_list[start_index:end_index]

```
