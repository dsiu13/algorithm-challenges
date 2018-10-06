// How are duplicates removed from a given array?

removeDupes = arr => {
  let ans = [... new Set(arr)]
  return ans
}
