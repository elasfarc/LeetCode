/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

var preorder = function(root, list=[]) {
    if(root == null)    return list;
    list.push(root.val);
    for(let child of root.children){
        preorder(child, list);
    }
    return list;
};