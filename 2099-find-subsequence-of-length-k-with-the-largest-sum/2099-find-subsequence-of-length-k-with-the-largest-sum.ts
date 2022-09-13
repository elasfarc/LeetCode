function maxSubsequence(nums: number[], k: number): number[] {
  const min = Math.min(...nums);
  const minIndex = nums.lastIndexOf(min);
  return nums.length == k ? nums : maxSubsequence(trunc(nums, minIndex), k);
}

function trunc<T>(toSliced: readonly T[], index: number): T[] {
  const LHS = toSliced.slice(0, index);
  const RHS = toSliced.slice(index + 1);
  return [...LHS, ...RHS];
}