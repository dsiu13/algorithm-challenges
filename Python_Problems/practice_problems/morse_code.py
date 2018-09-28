#  [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
#
#  International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes,
#  as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.
#
#  For convenience, the full table for the 26 letters of the English alphabet is given below
#  Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter.
#  For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-").
#  We'll call such a concatenation, the transformation of a word.
#
#  Return the number of different transformations among all words we have.
#
#  Example:
#  Input: words = ["gin", "zen", "gig", "msg"]
#  Output: 2
#  Explanation:
#  The transformation of each word is:
#  "gin" -> "--...-."
#  "zen" -> "--...-."
#  "gig" -> "--...--."
#  "msg" -> "--...--."
#
#  There are 2 different transformations, "--...-." and "--...--.".
#
#
#  The length of words will be at most 100.
#  Each words[i] will have length in range [1, 12].
#  words[i] will only consist of lowercase letters
#
#  Map each word into it's morse code representation
#  Reduce the list of morse code strings into a single set
#  Return the size of the set

def morseCode(words):
    map_=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    res = set()

    for word in words:
        val = ""
        for s in word:
            val += map_[ord(s)-ord('a')]
        res.add(val)

    return len(res)


def uniqueMorseRepresentations(self, words):
    morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    transformation = []
    for word in words:
        temp = []
        for char in word:
            temp.append(morse[ord(char)-97])
        transformation.append(''.join(temp))
    return len(set(transformation))
