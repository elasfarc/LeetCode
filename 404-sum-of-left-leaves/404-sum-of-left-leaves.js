/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var sumOfLeftLeaves = function (root) {
  let sum = 0;
  findLeftSum(root);
  return sum;

  function findLeftSum(root, isLeft = false) {
    if (root === null) return;
    if (root.left === null && root.right === null && isLeft) {
      sum += root.val;
      return;
    }

    findLeftSum(root.left, true);
    findLeftSum(root.right, false);
  }
};