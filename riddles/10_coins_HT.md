# 10 Coins - Head and Tails

# Problem Statement
- You are blindfolded and 10 coins are place in front of you on table. You are allowed to touch the coins, but can’t tell which way up they are by feel. You are told that there are 5 coins head up, and 5 coins tails up but not which ones are which.
- How do you make two piles of coins each with the same number of heads up? You can flip the coins any number of times.

## Solution
- Divide the coins into two piles of five.
- Flip all the coins one of the piles once.
- You will now have a matching number of heads in each pile.

## Pile One Flipped

| Pile One (Unflipped) | Pile Two (Unflipped) | Pile One (Flipped) |
| :------: | :-----: | :-----: |
| H T T T T | T H H H H | T H H H H |
| H H T T T| T T H H H | T T H H H |

## Pile Two Flipped

| Pile Two (Unflipped) | Pile One (Unflipped) | Pile Two (Flipped) |
| :------: | :-----: | :-----: |
| T H H H H | H T T T T | H T T T T |
| T T H H H| H H T T T | H H T T T |

- If you flip the coins in Pile One **( T H H H H )**, it will match the unflipped coins in Pile Two **( T H H H H )**.
- The same occurs if you flip Pile Two **( H T T T T )**, it will match the unflipped coins in Pile One **( H T T T T )**.
- Second Example: Flipped Pile One **( T T H H H )**, Unflipped Pile Two **( T T H H H )**


## Scaled Up Heads and Tails
- If we're given 100 coins, and 10 of them are heads.
- Solve to make an equal number of heads in each pile.
- We simply need to take 10 coins, as our first pile and flip them. The remaining 90 are left alone.
- We can solve any variation as long as we make the size of the first pile equal to the number of declared Heads up coins and flip them.
