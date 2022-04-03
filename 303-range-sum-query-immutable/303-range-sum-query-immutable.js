
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  var sum = 0;
  this.sumStore = [];
  for (num of nums) {
    sum += num;
    this.sumStore.push(sum);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return left == 0
    ? this.sumStore[right]
    : this.sumStore[right] - this.sumStore[left - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
