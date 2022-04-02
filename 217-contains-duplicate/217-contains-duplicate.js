/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = (nums, map = new Map()) =>
  nums.some((n) => (map.has(n) ? true : (map.set(n, 1), false)));