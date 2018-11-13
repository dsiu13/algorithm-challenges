# Three mislabeled jars aka Jelly Beans Problem

- You have 3 jars that are all mislabeled.
- One jar contains red marbles, another contains blue marbles and the third jar contains a mixture of both red and blue marbles.
- You can only pick up one marble at a time, but you can make as many picks as you want.
 What is the minimum number of marbles you can pick to determine the correct labels?

## Solution
- You can solve it in **one**.
- Take a marble out of the jar label Red + Blue. Depending on the marble that you get you can label the jar accordingly.
- Example: If we get a red marble. Since we know all the jars are mislabeled. The jar cannot be "Red + Blue", we know its **Red** based on the marble we took out.
- The other two mislabeled jars "Red" and "Blue".
- We know the jar label "Blue" is actually "**Red + Blue**". Since the only other option was "Red", but that isn't possible due to our initial pick.
- By process of elimination we know the last jar "Red" is actually **blue**
