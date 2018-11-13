# 10 Coins- Head and Tails

# Problem Statement
- You are blindfolded and 10 coins are place in front of you on table. You are allowed to touch the coins, but can’t tell which way up they are by feel. You are told that there are 5 coins head up, and 5 coins tails up but not which ones are which.
- How do you make two piles of coins each with the same number of heads up? You can flip the coins any number of times.

## Solution
- Divide the coins into two piles of five.
- Flip all the coins one of the piles once.
- You will now have a matching number of heads in each pile.


| Pile One (Unfliped) | Pile Two (Unfliped) | Pile One (Flipped) | Pile Two (Flipped) |
| :------: | :-----: | :-----: | :-----: |
| H T T T T | T H H H H | T H H H H | H T T T T |
| H H T T T| T T H H H | T T H H H | H H T T T |

- If you flip the coins in Pile One **( T H H H H )**, it will match the unflipped coins in Pile Two **( T H H H H )**.
- The same occurs if you flip Pile Two **( H T T T T )**, it will match the unflipped coins in Pile One **( H T T T T )**.
