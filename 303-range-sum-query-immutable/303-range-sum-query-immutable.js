/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.dataStore = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.dataStore.slice(left, right + 1).reduce((sum, n) => sum + n, 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
