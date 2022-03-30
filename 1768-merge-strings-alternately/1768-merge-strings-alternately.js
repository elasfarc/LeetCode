/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = (word1, word2, merged = '') => {
    
  var isLastChar = (i) => (str) => i == str.length - 1;

  for (let i = 0; i < word1.length; i++) {
      
    merged = merged.concat(word1[i], word2[i]);
      
    let isLast = isLastChar(i);
    if ([word1, word2].some(isLast)) {
      merged = merged.concat(
        isLast(word1) ? word2.slice(i + 1) : word1.slice(i + 1)
      );
        
      break;
    }
  }
  return merged;
};