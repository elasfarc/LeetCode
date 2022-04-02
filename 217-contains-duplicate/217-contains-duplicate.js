/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = (nums) => {
  var numsTable = nums.reduce(
    (map, n) => map.set(n, map.get(n) ? map.get(n) + 1 : 1),
    new Map()
  );
    
  return [...numsTable.values()].some(count => count > 1)
};