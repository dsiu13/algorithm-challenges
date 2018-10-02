# Check to see if two provided strings are anagrams of eachother.
# One string is an anagram of another if it uses the same characters
# in the same quantity. Only consider characters, not spaces
# or punctuation.  Consider capital letters to be the same as lower case
# --- Examples ----------------------------------------
#   anagrams('rail safety', 'fairy tales') --> True
#   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
#   anagrams('Hi there', 'Bye there') --> False

import re

# fails if special chars exist
def anagrams(s1,s2):
    regex = '[^A-Za-z0-9]+'
    word1 = sorted(re.sub(regex, '', s1).lower())
    word2 = sorted(re.sub(regex, '', s2).lower())
    print(word1)
anagrams('RAIL! SAFETY!', 'fairy tales')
