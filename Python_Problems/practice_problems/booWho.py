# Check if a value is classified as a boolean primitive.
# Return true or false.
# Boolean primitives are true and false.

def booWho(val):
    if(type(val) == bool):
        return True
    else:
        return false

booWho("False")
booWho(True)
