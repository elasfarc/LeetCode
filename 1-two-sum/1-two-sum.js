/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target ) => {
  map = new Map();
  for (let i = 0; i < nums.length; i++){
    let num = nums[i], needed = target - num;
    if (map.has(needed)) return [map.get(needed), i]
    map.set(num, i);
  }
}