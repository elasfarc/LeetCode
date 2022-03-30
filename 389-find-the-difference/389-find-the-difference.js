/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const charToASCI = (char) => char.charCodeAt();
const ASCItoChar = (code) => String.fromCharCode(code);
const last = (list) => list[list.length - 1];

var findTheDifference = (s, t) => {
    var c1 = 0; 
    var c2 = 0;
    
    for(let i = 0; i < s.length; i++){
        c1 += charToASCI(s[i]);
        c2 += charToASCI(t[i]);
    }
    
    c2+= charToASCI(last(t));
    
    return ASCItoChar(c2 - c1);
}