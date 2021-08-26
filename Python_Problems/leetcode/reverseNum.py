def reverseNumber(num):

    if(num < 0):
        return False;

    i = list(str(num))
    j = len(i) - 1

    for x in i:

        if(x == i[j]):
            j -= 1
        else:
            return False;

    return True;

reverseNumber(123241)
