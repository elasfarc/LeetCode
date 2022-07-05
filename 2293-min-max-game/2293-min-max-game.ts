function minMaxGame(nums: number[]): number {
  const length = nums.length;
  return length === 1
    ? nums[0]
    : minMaxGame(recursiveLoop(nums, Array(length / 2), 0));
}

function recursiveLoop(nums: number[], newNums: number[], i: number): number[] {
  if (i >= newNums.length) return newNums;
  if (i % 2 === 0) newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
  else newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
  return recursiveLoop(nums, newNums, i + 1);
}
