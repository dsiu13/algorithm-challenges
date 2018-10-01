// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message,
// count the number of ways it can be decoded.
//
// For example, the message '111' would give 3,
// since it could be decoded as 'aaa', 'ka', and 'ak'.
//
// You can assume that the messages are decodable.
// For example, '001' is not allowed

var numDecodings = function(s) {
    if (!s.length || s[0] == '0') return 0;
    // r2: decode ways of s[i-2] , r1: decode ways of s[i-1]
    var r1 = 1, r2 = 1;

    for (var i = 1; i < s.length; i++) {
        // zero voids ways of the last because zero cannot be used separately
        if (s[i] == '0') r1 = 0;

        // possible two-digit letter, so new r1 is sum of both while new r2 is the old r1
        if (s[i - 1] == '1' || s[i - 1] == '2' && s[i] <= '6') {
            r1 = r2 + r1;
            r2 = r1 - r2;
        }

        // one-digit letter, no new way added
        else {
            r2 = r1;
        }
    }

    return r1;
}
