/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var zeros = 0;
  let i = 0;
  while (i < nums.length && i + zeros < nums.length) {
    if (nums[i] == 0) {
      nums.splice(i, 1);
      nums.push(0);
      zeros++;
    } else ++i;
  }

  return nums;
};