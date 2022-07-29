function countHillValley(
  nums: number[],
  index = 0,
  counter: number = 0
): number {
  return index >= nums.length
    ? counter
    : countHillValley(
        nums,
        index + 1,
        isAdjacent(nums, index)
          ? counter
          : isHillOrValley(nums, index)
          ? counter + 1
          : counter
      );
}

//**************** */

function isAdjacent(nums: number[], index: number): boolean {
  return nums[index] == nums[index - 1];
}

function isHillOrValley(nums: number[], i: number): boolean {
  var value = nums[i];
  var left = getFirstNonEqOnLeft(nums, value, i);
  var right = getFirstNonEqOnRight(nums, value, i);
  return (value > left && value > right) || (value < left && value < right);
}

function getFirstNonEqOnLeft(nums: number[], value: number, i: number): number {
  return i <= 0
    ? NaN
    : value != nums[i - 1]
    ? nums[i - 1]
    : getFirstNonEqOnLeft(nums, value, i - 1);
}

function getFirstNonEqOnRight(
  nums: number[],
  value: number,
  i: number
): number {
  return i >= nums.length - 1
    ? NaN
    : value != nums[i + 1]
    ? nums[i + 1]
    : getFirstNonEqOnRight(nums, value, i + 1);
}

