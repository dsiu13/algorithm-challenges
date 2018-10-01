# Given an array of integers, return a new array such that each element at index i of the new array
# is the product of all the numbers in the original array except the one at i.

# For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
# If our input was [3, 2, 1], the expected output would be [2, 3, 6].

# Follow-up: what if you can't use division?

# Sum then divide by integer[i]
# [2, 3, 4, 5] => 120
# 2 - [3, 4, 5] =>  60
# 3 - [2, 4, 5] => 40
# 4 - [2, 3, 5] => 30
# 5 - [2, 3, 4] =>  24

from functools import reduce

givenArray = [3,4,5]

def arrayProduct(arr):
    # helper function to reduce val of given list
    sum = reduce(lambda x, y: x*y, arr)
    arrayList = []
    # divide product of given array by each element in our list
    for i in arr:
        # remove decimal from division via int()
        arrayList.append(int(sum/i))
    return arrayList

print(arrayProduct(givenArray))

# Without division
