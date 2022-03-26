/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const orderAlphabet = (str) => str.split('').sort().join('');

var areAlmostEqual = function(s1, s2) {
    if(s1 == s2) return true;
    if(orderAlphabet(s1) != orderAlphabet(s2))  return false;
    
    var noneEqualPositions = 0;
    for(let i = 0; i < s1.length; i++){
        if (s1[i] != s2[i]){
          noneEqualPositions+=1;
        }
    }
    
    return noneEqualPositions == 2;
};