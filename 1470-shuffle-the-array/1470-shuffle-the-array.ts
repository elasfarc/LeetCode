function shuffle(
  nums: number[],
  n: number,
  i = 0,
  shuffeled: number[] = []
): number[] {
  return i >= nums.length / 2
    ? shuffeled
    : shuffle(nums, n + 1, i + 1, [...shuffeled, nums[i], nums[n]]);
}