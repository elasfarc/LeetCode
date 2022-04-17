/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


function searchInsert(nums, target) {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    let midPoint = Math.floor((low + high) / 2);
    if (nums[midPoint] == target) return midPoint;
    if (nums[midPoint] > target) high = midPoint - 1;
    else low = midPoint + 1;
  }
  return low;
}
