/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t, isValid = true) {
  if (s.length != t.length) return false;

  s = s.split("").sort();
  t = t.split("").sort();

  {
    let i = 0;
    while (i < s.length) {
      if (s[i] != t[i]) {
        isValid = false;
        break;
      }
      i++;
    }
  }

  return isValid;
};
