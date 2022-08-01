const minimumOperations = (nums: number[]): number =>
  [...new Set(nums)].filter((n) => n > 0).length;