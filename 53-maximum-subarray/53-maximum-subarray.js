/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = nums =>
  nums.reduce(
    ({maxSum, currSum}, n) => ({
      currSum: Math.max(currSum + n, n),
      maxSum: Math.max(maxSum, Math.max(currSum + n, n) ),
    }),
    { currSum: 0, maxSum: -Infinity},
  ).maxSum


