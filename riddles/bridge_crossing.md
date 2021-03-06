# Bridge Crossing

## Problem Statement
- A group of four travelers comes to a bridge at night. The bridge can hold the weight of at most only two of the travelers at a time, and it can- not be crossed without using a flashlight.

- The travelers have one flashlight among them. Each traveler walks at a different speed: The first can cross the bridge in 1 minute, the second in 2 minutes, the third in 5 minutes, and the fourth takes 10 minutes to cross the bridge. If two travelers cross together, they walk at the speed of the slower traveler.

- What is the least amount of time in which all the travelers can cross from one side of the bridge to the other?

#### Crossing Times
- a = 1 min
- b = 2 min
- c = 5 min
- d = 10 min

### Includes return time to other side

| Crossing # | Travelers | Person returning | Round trip time |
| :------: | :-----: | :-----: | :-----: |
| Crossing 1 | A + B | A | 3 Mins |
| Crossing 2 | C + D | B | 12 Mins |
| Crossing 3 | A + B | No One | 2 Mins |

### 17 minutes total
