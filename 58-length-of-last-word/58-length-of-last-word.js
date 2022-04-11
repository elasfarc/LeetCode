/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLastWord(s) {
  s = s.trimEnd();
  var lastWordLength = 0;
  
  {let i = s.length - 1;
    while(i >= 0){
      if(s[i] == ' ') return lastWordLength;
      lastWordLength += 1;
      i -= 1;
    }
  }
  return lastWordLength;
}