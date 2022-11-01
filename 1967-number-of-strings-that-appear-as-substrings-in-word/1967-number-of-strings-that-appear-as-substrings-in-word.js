/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */


var numOfStrings = function(patterns, word) {
  return patterns.filter(pattern => word.match(pattern)).length
};




