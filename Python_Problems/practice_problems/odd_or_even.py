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

even_or_odd(-11234)

def odd_or_even(num):
    if((num&1)==0):
        print("{} is Even".format(num))
    else:
        print("{} is Odd".format(num))

odd_or_even(11)
