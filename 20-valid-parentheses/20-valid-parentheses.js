/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(s) {
  var parenthesesTable = { "(": ")", "[": "]", "{": "}" };
  var stack = [];
  stack.top = function () {
    return this[this.length - 1];
  };

  for (let char of s) {
    if (parenthesesTable[char]) stack.push(char);
    else {
      if (char != parenthesesTable[stack.top()]) return false;
      stack.pop();
    }
  }
  return stack.length == 0;
}
