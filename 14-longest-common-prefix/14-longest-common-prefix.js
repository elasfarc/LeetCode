/**
 * @param {string} s
 * @return {number}
 */
function longestCommonPrefix([first, ...rest]) {
  if (rest.length == 0) return first;
  var lPrefix = "";

  {
    let i = 0;
    while (i < first.length) {
      let second = rest[0];
      if (first[i] != second[i]) break;
      lPrefix += second[i];
      i++;
    }
  }

  return lPrefix == ""
    ? lPrefix
    : longestCommonPrefix([lPrefix, ...rest.slice(1)]);
}
