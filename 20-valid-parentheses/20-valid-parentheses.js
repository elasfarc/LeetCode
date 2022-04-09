/**
 * @param {string} s
 * @return {boolean}
 */

var parenthesesTable = {'(' : ')', '[' : ']', '{' : '}'};
const top = stack => stack[stack.length - 1];

function isValid(s, stack = []) {
  return s.length == 0
    ? stack.length == 0
    : parenthesesTable[s[0]]
    ? isValid(s.slice(1), [...stack, s[0]])
    : s[0] == parenthesesTable[top(stack)]
    ? ( stack.pop(), isValid(s.slice(1), stack))
    : false
}