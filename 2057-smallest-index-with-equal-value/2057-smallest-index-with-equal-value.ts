const modulo10 = modulo(10);

function smallestEqual(nums: number[], index = 0): number {
  return index >= nums.length
    ? -1
    : modulo10(index) == nums[index]
    ? index
    : smallestEqual(nums, index + 1);
}

function modulo(y: number): (x: number) => number {
  return (x) => x % y;
}