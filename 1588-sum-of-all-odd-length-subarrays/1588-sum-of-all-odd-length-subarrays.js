/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  var sum = 0;
  var subarraysLengthes = oddNumsZeroTill(arr.length);

  for (subLength of subarraysLengthes) {
    for (let i = 0; i < arr.length; i++) {
      let subArr = arr.slice(i, subLength + i);
      if (subArr.length != subLength) break;
      sum += subArr.reduce((a, b) => a + b);
    }
  }
  return sum;
};
function oddNumsZeroTill(num) {
  var result = [];
  while (num > 0) {
    if (isOdd(num)) {
      result.push(num);
    }
    num -= 1;
  }
  return result;

  //****
  function isOdd(n) {
    return n % 2 != 0;
  }
}
