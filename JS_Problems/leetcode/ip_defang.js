// 1108 Defanging an IP address
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
// Calculate BigO Notation

let ipDefang = address => {
  let defangedIP = []
  let defanging = address.split("");
  defanging.map(x => {
    if (x == ".") {
      defangedIP.push("[.]");
    } else {
      defangedIP.push(x);
    };
  })
    return defangedIP.join("");
};

//Runtime 84ms
let ipDefang = address => {
  let defanged = "";
  for(i = 0; i < address.length; i++) {
    address[i] == "." ? defanged += "[.]" : defanged += address[i]
  }
}
