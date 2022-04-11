/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function(s) {
//   var lastWordLength = 0;
  
//     {let i = s.length - 1;
//      while(i >= 0){
//        if(s[i] != ' ' ) lastWordLength += 1;
//        else if (lastWordLength > 0 ) return lastWordLength;
//        i -= 1;
//      }
//     }
//   return lastWordLength;
// };

const lengthOfLastWord = s => {
  s = s.trimEnd();
  var lastWordLength = 0;
  
  {let i = s.length - 1;
    while(i >= 0){
      console.log(s[i])
      if(s[i] == ' ') return lastWordLength;
      lastWordLength += 1;
      i -= 1;
    }
  }
  return lastWordLength;
}