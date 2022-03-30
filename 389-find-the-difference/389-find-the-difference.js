/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = (s, t) => {
    s = s.split('').sort();
    t = t.split('').sort();
    
    let difference = '';
    
    for(let i = 0; i < t.length; i++){
        if(t[i] != s[i] ){
            difference = t[i];
            break;
        }
    }
    
    return difference;
}