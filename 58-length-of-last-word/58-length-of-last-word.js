/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var lastWordLength = 0;
  
    {let i = s.length - 1;
     while(i >= 0){
       if(s[i] != ' ' ) lastWordLength += 1;
       else if (lastWordLength > 0 ) return lastWordLength;
       i -= 1;
     }
    }
  return lastWordLength;
};