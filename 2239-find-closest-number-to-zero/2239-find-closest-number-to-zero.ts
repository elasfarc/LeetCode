function findClosestNumber(
  nums: number[],
  index = 0,
  closestNumber: number = Infinity
): number {
  return index >= nums.length
    ? closestNumber
    : findClosestNumber(
        nums,
        index + 1,
        Math.abs(nums[index]) < Math.abs(closestNumber)
          ? nums[index]
          : Math.abs(nums[index]) == Math.abs(closestNumber)
          ? Math.max(nums[index], closestNumber)
          : closestNumber
      );
}
