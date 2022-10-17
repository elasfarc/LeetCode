function sortArray(
  nums: number[],
  left = 0,
  right = nums.length - 1
): number[] {
  if (right - left + 1 <= 1) return nums;

  let pivot = nums[right];
  let pointer = left;

  for (let i = left; i < right; i++)
    if (nums[i] < pivot) {
      if (i != pointer) swap(nums, i, pointer);
      pointer++;
    }

  if (right != pointer) swap(nums, right, pointer);

  sortArray(nums, left, pointer - 1);
  sortArray(nums, pointer + 1, right);

  return nums;
}

function swap(list: number[], aIdx: number, bIdx: number) {
  const temp = list[aIdx];
  list[aIdx] = list[bIdx];
  list[bIdx] = temp;
}
