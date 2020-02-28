// Given a valid (IPv4) IP address, return a defanged version of that IP address.
//
// A defanged IP address replaces every period "." with "[.]".

// Example 1:
//
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:
//
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

// 1st Attempt
// Runtime: 56 ms
// Memory Usage: 33.8 MB

let ipDefrag = address => {
  let defraggedIp = []
  let defragging = address.split("");
  defragging.map(x => {
    if (x == ".") {
      defraggedIp.push("[.]");
    } else {
      defraggedIp.push(x);
    };
  })
    return defraggedIp.join("");
};
