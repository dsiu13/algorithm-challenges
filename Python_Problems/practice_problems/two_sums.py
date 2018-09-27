# Given an array of integers, return indices of the two numbers such that they add up to a specific target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.

#Example
# Given nums = [2, 7, 11, 15], target = 9,
# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1].

def two_sum(arr,targ):
    look_for = {}
    for n,x in enumerate(arr):
        try:
            return look_for[x] + 1, n + 1
        except KeyError:
            look_for.setdefault(targ - x,n)
