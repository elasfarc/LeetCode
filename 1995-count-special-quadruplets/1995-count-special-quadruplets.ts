function countQuadruplets(nums: number[]): number {
  let quadruplets = 0;

  for (let i = 0; i < nums.length - 3; i++)
    for (let j = i + 1; j < nums.length - 2; j++)
      for (let k = j + 1; k < nums.length - 1; k++)
        for (let r = k + 1; r < nums.length; r++)
          if (nums[i] + nums[j] + nums[k] == nums[r]) quadruplets++;

  return quadruplets;
}