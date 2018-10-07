// You have an N by N board. Write a function that, given N,
// returns the number of possible arrangements of the board where N queens
// can be placed on the board without threatening each other,
// i.e. no two queens share the same row, column, or diagonal.

// Queens can attack diagonally, vertically, or horizontally. As a result,
// there can only be one queen in each row, one in each column, and at most one on each diagonal.
// Since we know there can only one queen per row, we will start at the first row, place a queen,
// then move to the second row, place a second queen, and so on until either a) we reach a valid solution or
//  b) we reach a dead end (ie. we can't place a queen such that it is "safe" from the other queens).
//
// Since we are only placing one queen per row, we don't need to worry about horizontal attacks,
// since no queen will ever be on the same row as another queen.
// That means we only need to check three things before placing a queen on a certain square:
//  1) The square's column doesn't have any other queens on it,
//  2) the square's left diagonal doesn't have any other queens on it, and
//  3) the square's right diagonal doesn't have any other queens on it.
// If we ever reach a point where there is nowhere safe to place a queen,
// we can give up on our current attempt and immediately test out the next possibility

countNQueensSolutions = function(n) {
  //Keeps track of the # of valid solutions
  var count = 0;

  //Helps identify valid solutions
  var done = Math.pow(2,n) - 1;

  //Checks all possible board configurations
  // Each of these is an integer, which we can grab the bits from
  var innerRecurse = function(ld, col, rd) {

    //All columns are occupied,
    //so the solution must be complete
    if (col === done) {
      count++;
      return;
    }

    //Gets a bit sequence with "1"s
    //whereever there is an open "slot"
    var poss = ~(ld | rd | col);

    //Loops as long as there is a valid
    //place to put another queen.
    while ( poss & done ) {
      var bit = poss & -poss;
      poss -= bit;
      innerRecurse((ld|bit)>>1, col|bit, (rd|bit)<<1);
    }
  };

  innerRecurse(0,0,0);

  return count;
};
