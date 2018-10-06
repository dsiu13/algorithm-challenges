# Implement an autocomplete system.
# That is, given a query string s and a set of all possible query strings,
# return all strings in the set that have s as a prefix.
# For example, given the query string de and the set of strings
# [dog, deer, deal], return [deer, deal].
# Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
# Radix Trie

def autocomplete(arr, query):
    qLength = len(query)
    ans = []
    for x in arr:
        if x[0:qLength] == query:
            ans.append(x)
    return ans

print(autocomplete(['dog', 'deer', 'deal'], 'de'))
