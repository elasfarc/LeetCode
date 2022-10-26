function minimumDifference(nums: number[], k: number): number {
  if (nums.length === 1) return 0;
  let minDiff = Infinity;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length - k; i++) {
    minDiff = Math.min(minDiff, nums[i + k - 1] - nums[i]);
  }
  return minDiff;
}