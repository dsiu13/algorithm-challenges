# Time Complex - O(1)
def jewels_stones(a,b):
    return sum([s in J for s in S])

# Time Complex - O(m + n * 1) = O(m + n)
# Space Complex - O(1)
def jewels_stones(a,b):
    lookup = set(J)
    return sum(s in lookup for s in S)

def jewels(S, J):
    jewels = {x: 0 for x in J}
    for char in S:
        if char in jewels.keys():
            jewels[char] += 1

    return sum(jewels.values())
