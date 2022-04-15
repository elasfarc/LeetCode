/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;

  {
    let i = 0;
    while (i < haystack.length) {
      let j = 0,
        k = i;
      while (j < needle.length && haystack[k] == needle[j]) {
        if (j == needle.length - 1) return i;
        j++;
        k++;
      }

      i++;
    }
  }
  return -1;
};
