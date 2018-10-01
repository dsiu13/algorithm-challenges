# Create a function that takes a string and returns
# a string with its letters in alphabetical order.
# Examples
# "hello" ➞ "ehllo"
# "edabit" ➞ "abdeit"
# "hacker" ➞ "acehkr"
# "geek" ➞ "eegk"
# "javascript" ➞ "aacijprstv"

# Call a split on str into substring
# sort() - dictionary order
# uppercase letters are considered less than lowercase in JS
# need to call lower case

def alphabetSoup(str):
    return sorted(list(str.lower()))

print(alphabetSoup('Hello'))
