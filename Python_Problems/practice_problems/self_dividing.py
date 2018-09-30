# A self-dividing number is a number that is divisible by every digit it contains.
#
# For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
#
# Also, a self-dividing number is not allowed to contain the digit zero.
#
# Given a lower and upper number bound, output a list of every possible self dividing number,
# including the bounds if possible.
#
# Input:
# left = 1, right = 22
# Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
#
# Note:
#
# The boundaries of each input argument are 1 <= left <= right <= 10000.

# 1 Brute Force
# A straightforward approach to that problem would be to convert the number
# into a character array (string in Python), and then convert back to integer
# to perform the modulo operation when checking n % d == 0.

# Time Complexity: O(D), where D is the number of integers in the range
# [L, R] and assuming log(R) is bounded. (In general, the complexity
# would be O(Dlog R).
# Space Complexity: O(D), the length of the answer.
class Solution(object):
    def selfDividingNumbers(self, left, right):
        def self_dividing(n):
            for d in str(n):
                if d == '0' or n % int(d) > 0:
                    return False
            return True
        """
        Alternate implementation of self_dividing:
        def self_dividing(n):
            x = n
            while x > 0:
                x, d = divmod(x, 10)
                if d == 0 or n % d > 0:
                    return False
            return True
        """
        ans = []
        for n in range(left, right + 1):
            if self_dividing(n):
                ans.append(n)
        return ans #Equals filter(self_dividing, range(left, right+1))
