type NumsMap = { [k: string]: boolean | undefined };

function findFinalValue(
  nums: number[],
  original: number,
  numsMap = getNumsMap(nums)
): number {
  return numsMap[original]
    ? findFinalValue(nums, original * 2, numsMap)
    : original;
}

//******
function getNumsMap(nums: readonly number[]): NumsMap {
  return nums.reduce<NumsMap>(
    (map, n) => (map[n] ? map : { ...map, [n]: true }),
    {}
  );
}