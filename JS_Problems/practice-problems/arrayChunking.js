// Given an array and chunk size, divide the array into
// many subarrays where each subarray is of length size

// Example
// chunk([1,2,3,4], 2) => [ [1,2] ,[3,4] ]
// chunk([1,2,3,4,5], 2) => [ [1,2], [3,4], [5] ]
// chunk([1,2,3,4,5], 10) => [ [1,2,3,4,5] ]

// create empty array to hold chunks called 'chunked'
// for each ele in unchunked subarray
// grab last ele in 'chunked'
// if last ele doesn't exist, or if its length is equal to chunk size,
// push a new chunk into 'chunked' with current else {
// else add the current ele into the chunk

}

function chunk(array , size){
  const chunked = [];

  for (let element of arry){
    const last = chunked[chunked.length - 1]

    if(!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked

}

// 2nd solution

// create empty 'chunked array'
// create 'index' start @ 0
// while index is less than array.length =>
// push a slice of lenth 'size' from 'array' into 'chunked'
// add 'size' to 'index'


function chunk(array , size){
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    array.slice(index, index + size)
    index += size;
  }
  return chunked;
}
