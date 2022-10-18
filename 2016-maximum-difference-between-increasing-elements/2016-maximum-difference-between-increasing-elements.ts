function maximumDifference(nums: number[]): number {
  let min = nums[0];
  let maxMinDiff = -1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > min && nums[i] - min > maxMinDiff) maxMinDiff = nums[i] - min;
    if (nums[i] < min) min = nums[i];
  }

  return maxMinDiff;
}
