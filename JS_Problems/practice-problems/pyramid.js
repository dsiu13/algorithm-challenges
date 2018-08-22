
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// From 0 to N (iterate through rows)
// Create an empty string 'level'
// from 0 to ??? (Columns) =>
// IF the col should have a #, add a '#' to level
// ELSE add a space to 'level'
// console log it


function pyramid(n) {
  const midpoint = Math.floor((2 * n -1 / 2))
  for(let row = 0; row < n; row++) {
    let level = '';

    for(let column = 0; column < 2 * 2 n - 1; column++){
      if(midpoint - row <= coumn && midpoint + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }
  }
}
