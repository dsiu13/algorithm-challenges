There are 25 horses among which you need to find out the fastest 3 horses. You can conduct race among at most 5 to find out their relative speed. At no point you can find out the actual speed of the horse in a race. Find out how many races are required to get the top 3 horses.


## 1 is the fastest, 5 the slowest.

| Group  | Group Finishing Order|
| :---: | :-------------: |
| 1  | A5 A4 A3 A2 A1 |
| 2  | B5 B4 B3 B2 B1 |
| 3  | C5 C4 C3 C2 C1 |
| 4  | D5 D4 D3 D2 D1 |
| 5  | E5 E4 E3 E2 E1 |


### The answer is Seven Races

- Split 25 into five groups of five race them. Label each group A-E. We're at **Five** Races.
- Arrange each group by speed. a1(the fastest) to a5(the slowest). Repeat for each group.
- Arrange groupings by having the fastest horse group on top. Then race the
fastest horse in each group. The winner is the fastest overall horse(1st place) At a total of **Six** Races
- To find the 2nd and 3rd in one race we need to remove horses that have no chance of winning. These horses at best can be **two places away**.
- Last race (Seventh Race), we can eliminate any horse from two slowest groups since the fastest horse in each group was slower than the fastest horse in other groups. Also remove the four other horses from the 3rd fastest group for the same reason.
- We can also remove the three slowest horses from the 2nd fastest group
since they aren't faster than 1st/2nd fastest in that group.
- We can also remove the three slowest from the first fastest group.
- That leaves us with 5 horses(A2, A3, B1, B2, C1)
