# 1672. Richest Customer Wealth
#
# Input: accounts = [[1,2,3],[3,2,1]]
# Output: 6
# Explanation:
# 1st customer has wealth = 1 + 2 + 3 = 6
# 2nd customer has wealth = 3 + 2 + 1 = 6
# Both customers are considered the richest with a wealth of 6 each, so return 6.
# Example 2:
#
# Input: accounts = [[1,5],[7,3],[3,5]]
# Output: 10
# Explanation:
# 1st customer has wealth = 6
# 2nd customer has wealth = 10
# 3rd customer has wealth = 8
# The 2nd customer is the richest with a wealth of 10.
# Example 3:
#
# Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
# Output: 17

# Python program to demonstrate working
# of map.

# Return double of n
def addition(n):
    return n + n

# We double all numbers using map()
numbers = (1, 2, 3, 4)
result = map(addition, numbers)
print(list(result)

def richest(accounts):
    sum = 0
    
