// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// from 0 to n => create an empty string, "stair"
// from 0 to n => IF the current column is =< than current row -> add '#' to stair
// ELSE add a space to 'stair'
// Console.log 'stair'

function steps(n) {
  for(let row = 0; row < n; row++) {
    let stair = '';

    for(let col = 0; col < n; col++){
      stair += '#';
    } else {
      stair += ' ';
    }
    console.log(stair)
  }
}


// Recursion
// Figure out the bare min pieces of info to represent your problem
// Give reasonable defaults to the bare min pieces of info
// check base case. If theres no more work, return
// do work, call function again, making sure the args have changed in some way

function steps(n, row = 0, stair = '') {
  if(n === row){
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    steps(m, row + 1);
  }

  if(stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  steps(n, row, stair);

}
