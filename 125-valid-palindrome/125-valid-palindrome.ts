/**
 * @param {string} s
 * @return {boolean}
 */
const getCharCode = (index) => (str) => str.charCodeAt(index);
const toLower = (char) => char.toLowerCase();
const split = (speatator) => (list) => list.split(speatator);
const gte = (y) => (x) => x >= y;
const lte = (y) => (x) => x <= y;
const inc = (num) => num + 1;
const dec = (num) => num - 1;
const either = (f, g) => (...args) => f(...args) || g(...args);
const both = (f, g) => (...args) => f(...args) && g(...args);
//************* */
const isSmallLetter = compose(both(gte(97), lte(122)), getCharCode(0));
const isCapital = compose(both(gte(65), lte(90)), getCharCode(0));
const isNumChar = compose(both(gte(48), lte(57)), getCharCode(0));
const isValidChar = either(isNumChar, either(isSmallLetter, isCapital));
const getValidChars = (revisedStr, char) => isValidChar(char) ? revisedStr + toLower(char) : revisedStr;
const _isPalindrome = (str, left = 0, right = str.length - 1) => {
    return left >= right ?
        true :
        str[left] == str[right] ?
        _isPalindrome(str, inc(left), dec(right)) :
        false;
};

//******* isPalindrome ****** */

const isPalindrome = compose(_isPalindrome, reduce(getValidChars, ""), split(""));

//******* isPalindrome ****** */




//*********UTILS************** */
function reduce(reducer, initAcc) {
    return (list) => {
        let acc = initAcc;
        for (let i = 0; i < list.length; i++)
            acc = reducer(acc, list[i], i, list);
        return acc;
    };
}

function compose(...fns) {
    return (...init) => fns.reduceRight((ans, fn) => fn(ans), init[0]);
}