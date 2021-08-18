//Seven Sided Die
// You have a function rand5() that generates a random integer from 1 to 5.
// Use it to write a function rand7() that generates a random integer from 1 to 7.
//
// rand5() returns each integer with equal probability. rand7() must also return each integer with equal probability.

function rand7Table()
{
  const results = [
    [1, 2, 3, 4, 5],
    [6, 7, 1, 2, 3],
    [4, 5, 6, 7, 1],
    [2, 3, 4, 5, 6],
    [7, 0, 0, 0, 0],
  ];

  while (true)
  {
    const row = rand5() - 1;
    const column = rand5() - 1;

    if (row === 4 && column > 0)
    {
      continue;
    }
    return results[row][column];
  }
}
