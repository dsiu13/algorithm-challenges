# Insertion Sort

Takes an element compares it to the current element, and inserts the element left or right depending on if the value is greater or less than the current element.

````
function insertionSort(arr){
  var i, len = arr.length, el, j;

  for(i = 1; i<len; i++){
    el = arr[i];
    j = i;

    while(j>0 && arr[j-1]>toInsert){
      arr[j] = arr[j-1];
      j--;
   }

   arr[j] = el;
  }

  return arr;
}
````
