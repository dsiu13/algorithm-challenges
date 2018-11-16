# Russian Roulette

## Problem
- A Russian gangster kidnaps you.
- He puts two bullets in **consecutive order** in an empty six-round revolver, spins it, points it at your head and shoots. *click* You’re still alive.
- He then asks you, “do you want me to spin it again and fire or pull the trigger again right away?”
- For each option, what is the probability that you’ll be shot?

# Possible Load Order

| Combo | Load Order|
| :---: | :-------------: |
| 1  | B B x x x x |
| 2  | x B B x x x |
| 3  | x x B B x x |
| 4  | x x x B B x |
| 5  | x x x x B B |
| 6  | B x x x x B |

# Solution
- Combo one & six can be removed. Since the first shot would have ended the "game".
- Out of the remaining four combinations, only combo two loses us the "game" (combo two). There is a 25% chance if we chose to immediately have the trigger pulled.
- There is a 33% chance if we take the spin. Since we now have the possibility to land on combo one or six.
