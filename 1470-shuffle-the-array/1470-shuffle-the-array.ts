function shuffle(nums: number[], n: number, index = 1): number[] {
  return index >= nums.length - 2
    ? nums
    : shuffle(
        [
          ...nums.slice(0, index),
          nums[n],
          ...nums.slice(index, n),
          ...nums.slice(n + 1),
        ],
        n + 1,
        index + 2
      );
}