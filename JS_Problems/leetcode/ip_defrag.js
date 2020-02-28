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

let ipDefrag = ip => {
  let defraggedIp = []
  let defragging = ip.split("")
  defragging.map(x => {
    if (x == ".") {
      defraggedIp.push("[.]")
    } else {
      defraggedIp.push(x)
    };
  })
    return defraggedIp.join("")
};
