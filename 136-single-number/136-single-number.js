/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map()
  for (let num of nums) 
    map.has(num) ?  map.delete(num) : map.set(num)
  return map.keys().next().value
}