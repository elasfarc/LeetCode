/**
 * @param {number[]} arr
 * @return {boolean}
 */
const orderASC = (a,b) => a - b;

function canMakeArithmeticProgression(arr) {
  arr = [...arr].sort(orderASC);
  if (arr.length == 2) return true;
  var step = arr[0] - arr[1];
  while (arr.length > 1) {
    var [a, b] = arr;
    if (a - b != step) return false;
    arr = arr.slice(1);
  }
  return true;
}