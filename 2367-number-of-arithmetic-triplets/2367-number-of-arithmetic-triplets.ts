function arithmeticTriplets(nums: number[], diff: number): number {
  var numsMap = getNumsMap(nums);
  return getNoOfArithmeticTriplets(numsMap, nums, diff)
}

type NumsMap = { [k: string]: boolean };
function getNumsMap(nums: number[]): NumsMap {
  return nums.reduce((map, n) => ({ ...map, [n]: true }), {});
}

function getNoOfArithmeticTriplets(
  map:NumsMap,
  nums: number[],
  diff: number,
  index = 0,
  numberOfAT = 0
): number {
  var number = nums[index]
 return index >= nums.length
  ? numberOfAT
  : getNoOfArithmeticTriplets(map, nums, diff, index + 1, 
    map[number + diff] && map[number + 2 * diff] ? numberOfAT + 1 : numberOfAT
  )
}