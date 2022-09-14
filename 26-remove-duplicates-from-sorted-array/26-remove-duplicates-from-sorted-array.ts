function removeDuplicates(nums: number[], index = 0, k = 0): number {
  const num = nums[index],
    next = nums[index + 1];
  return index >= nums.length
    ? k
    : removeDuplicates(
        num == next ? nums : ((nums[k++] = num), nums),
        index + 1,
        k
      );
}