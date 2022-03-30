/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var isLastChar = (i) => (str) => i == str.length - 1;
var mergeAlternately = (word1, word2) =>
  Array(word1.length > word2.length ? word1.length : word2.length)
    .fill(null)
    .reduce(
      (merged, ele, i) =>
        merged.concat(
          word1[i] == undefined ? "" : word1[i],
          word2[i] == undefined ? "" : word2[i]
        ),
      ""
    );