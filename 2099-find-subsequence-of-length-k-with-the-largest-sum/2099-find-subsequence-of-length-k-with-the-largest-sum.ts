const ASC = (a: number, b: number) => a - b;

function maxSubsequence(
  nums: number[],
  k: number,
  [min, ...rest] = [...nums].sort(ASC)
): number[] {
  console.log(nums, [min, ...rest]);
  const minIndex = nums.lastIndexOf(min);
  return nums.length == k
    ? nums
    : maxSubsequence(trunc(nums, minIndex), k, rest);
}

function trunc<T>(toSliced: readonly T[], index: number) {
  const LHS = toSliced.slice(0, index);
  const RHS = toSliced.slice(index + 1);
  return [...LHS, ...RHS];
}