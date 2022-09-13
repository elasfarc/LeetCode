const ASC = (a: number, b: number) => a - b;

function maxSubsequence(nums: number[], k: number): number[] {
  return _maxSubsequence(nums, k, [...nums].sort(ASC));
}

function _maxSubsequence(
  nums: number[],
  k: number,
  ascSorted: number[]
): number[] {
  const [min, ...rest] = ascSorted;
  const minIndex = nums.lastIndexOf(min);
  return nums.length == k
    ? nums
    : _maxSubsequence(trunc(nums, minIndex), k, rest);
}

function trunc<T>(toSliced: readonly T[], index: number) {
  const LHS = toSliced.slice(0, index);
  const RHS = toSliced.slice(index + 1);
  return [...LHS, ...RHS];
}
