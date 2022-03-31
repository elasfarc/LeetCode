/**
 * @param {string} s
 * @return {string}
 */
const charToASCI = (char) => char.charCodeAt();
const ASCItoChar = (code) => String.fromCharCode(code);

var freqAlphabets = function (s) {
  var parsed = "";

  let i = 0;
  while (i < s.length) {
    if (s[i + 2] == "#") {
      parsed += ASCItoChar(charToASCI(s[i + 1]) + (s[i] == "1" ? 58 : 68));
      i += 3;
    } else {
      parsed += ASCItoChar(charToASCI(s[i]) + 48);
      i += 1;
    }
  }
  return parsed;
};