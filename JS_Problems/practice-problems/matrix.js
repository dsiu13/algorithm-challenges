// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// Create an empty array of arrays called 'results'
// create a counter var, starting at '1'.
// As long as (start column <= end column) & (start row <= end row) ->
// loop from start col to end column
// At results[start_row][i] assign counter var -> increment counter
// increment start row
// loop from start row to end row -> at results[i][end_column] assign counter var
// increment counter
// decrement end row
// repeat for other two sides

function matrix(n) {
  const results = [];

  for(let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let start_col = 0;
  let start_row = 0;
  let end_col = n - 1;
  let end_row = n - 1;

  while (start_col <= end_col && start_row <= end_row) {
    // Top Row
    for(let i = start_col; i <= end_col; i++){
      results[start_row][i] = counter;
      counter ++;
    }
    start_row++;

    // right column
    for(let i = start_row; i <= end_row; i++){
      results[i][end_row] = counter;
    }
    end_col--;

    // Bottom row
    for(let i = end_col; i >= start_row; i--){
      results[end_row][i] = counter;
      counter++;
    }
    end_row--;

    //start column
    for( let i = end_row; i >= start_row; i--){
      results[i][start_col] = counter;
      counter++
    }
    start_col++;
  }

}

// You can assign values to indices that have not been initialized
// const arr = [];
// arr[3] = "hi there" -> [null, null, null, "hi there"]
