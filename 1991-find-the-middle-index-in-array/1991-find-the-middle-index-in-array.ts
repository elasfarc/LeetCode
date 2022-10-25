function findMiddleIndex(nums: number[]): number {
  const prefixSum = getPrefixSum(nums);
  const lastIdx = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    const left = i == 0 ? 0 : prefixSum[i - 1];
    const right = i == lastIdx ? 0 : prefixSum[lastIdx] - prefixSum[i];
    if (left == right) return i;
  }
  return -1;
}

//*****

function getPrefixSum(nums: readonly number[]): number[] {
  const prefixSum: number[] = [];
  for (let i = 0; i < nums.length; i++)
    prefixSum[i] = i == 0 ? nums[i] : nums[i] + prefixSum[i - 1];
  return prefixSum;
}
