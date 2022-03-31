/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s, lower = '') {
    const charToASCI = (ch) => ch.charCodeAt();
    const capToLower = (cap) => String.fromCharCode(charToASCI(cap) + 32);
    const isUpper = (ch) => charToASCI(ch) >= 65 &&  charToASCI(ch) <= 90;
    
    for(let i = 0; i < s.length; i++)
      lower += isUpper(s[i]) ? capToLower(s[i]) : s[i];
        
    return lower;
};