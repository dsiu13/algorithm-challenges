# Given an listay of integers, return a new listay such that each element at index i of the new listay
# is the product of all the numbers in the original listay except the one at i.

# For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
# If our input was [3, 2, 1], the expected output would be [2, 3, 6].

# Follow-up: what if you can't use division?

# multiply then divide by integer[i]
# [2, 3, 4, 5] => 120
# 2 - [3, 4, 5] =>  60
# 3 - [2, 4, 5] => 40
# 4 - [2, 3, 5] => 30
# 5 - [2, 3, 4] =>  24

from functools import reduce

def listProduct(givenList):
    # helper function to reduce val of given list
    product = reduce(lambda x, y: x*y, givenList)
    ans = []
    # divide product of given list by each element in our list
    for i in givenList:
        # remove decimal from division via int()
        ans.append(int(product/i))
    return ans

# Without division ################################################

from functools import reduce

ans = []

def listProduct2(givenList):
    for x in givenList:
        # generate a copy list we can manipulate
        copyList = givenList.copy()
        # remove the value before we multiply
        copyList.remove(x)
        product = reduce(lambda x, y: x*y, copyList)
        ans.append(product)
    return ans
