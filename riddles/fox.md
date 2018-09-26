# Fox Dens
## Create a strat to catch the Fox
- There are five dens, and each night the fox moves 1 position left or right.
- You can only check one Den a day.

## Case 1: The Fox is in an Even Numbered Den (Assumption)
- So either Den 2 or Den 4, if we catch the fox its fine.
- Else, it was in Den 4, and now our second check is odd numbered. Fox will
now be in Den 3 or 5.
- Now we check Den 3, and if we get it its fine, else we check Den 4 on day 3, because the Fox was in Den 5 on day 2.
- If we don't get it on Day 3 our assumption that the Fox started in an even numbered den was wrong.

| Day #  | Den Checked |
| :------: | :-----: |
| Day 1  | Den 2 |
| Day 2  | Den 3 |
| Day 3  | Den 4 |

## Case 2: The Fox was in an Odd Numbered Den
- Day 1 was odd, Day 2 was even, Day 3 was odd, Day 4 should be even.
- Now we just use the method we used in case one.

| Day #  | Den Checked |
| :------: | :-----: |
| Day 1  | Den 2 |
| Day 2  | Den 3 |
| Day 3  | Den 4 |
| Day 4  | Den 2 |
| Day 5  | Den 3 |
| Day 6  | Den 4 |

# Sequence for Den Checks
- 2, 3, 4, 2, 3, 4
- With this strategy it will take us at most 6 days to find the Fox.
