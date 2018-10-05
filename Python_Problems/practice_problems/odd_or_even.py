# determine if a given integer is even or odd without using divison or modulus
# Square Roots?

import math

def even_or_odd(num):
    while abs(num) > 0:
        num -= 2
        if num == 1:
            print('Odd')
        if num == 0:
            print('Even')

# Bitwise operator ////////////////////////////////
# last bit(LSB) is 0 for all even numbers and 1 for all odd numbers.
# Example : 2 - 0000 0010, 8 - 0000 1000 and 5 - 0000 0101

def odd_or_even(num):
    if((num&1)==0):
        print("{} is Even".format(num))
    else:
        print("{} is Odd".format(num))


#
