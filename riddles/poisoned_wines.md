# Poisoned Wine

# Problem
- You're throwing a party and plan to provide your quests with a 1000 bottles of delightful and very expensive wine.
- A single bottle has been poisoned and you don't know which one. The poison takes 1 hour to take effect. The party is one hour away.
- You have 10 Rats, to test the wine out on.
- Not wanting to waste any wine. How do you determine which bottles are safe?

# Solutions

## Simple solution
- label the bottles from 1 to 1000.
- Remove the hundred bottles from the poisoned rat.
- You save 900 bottles.

| Rat # | Bottles to Drink |
| :------: | :-----: |
| 1 | 1 - 100|
| 2 | 101 - 200 |
| 3 | 201 - 300 |
| 4 | 301 - 400 |
| 5 | 401 - 500 |
| 6 | 501 - 600 |
| 7 | 601 - 700 |
| 8 | 701 - 800 |
| 9 | 801 - 900 |
| 10 | 901 - 1000 |


## Binary Solution
- Assign each bottle a value based on its binary value.

| Binary Position | Slot Value |
| :------: | :-----: |
| 1 | 1|
| 2 | 2 |
| 3 | 4 |
| 4 | 8 |
| 5 | 16 |
| 6 | 32 |
| 7 | 64 |
| 8 | 128 |
| 9 | 256 |
| 10 | 512 |
