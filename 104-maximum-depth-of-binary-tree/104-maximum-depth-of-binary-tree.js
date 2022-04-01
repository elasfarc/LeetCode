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

function maxDepth(root, depth = 0) {

    return root 
        ? Math.max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1))
        : depth
    
};
