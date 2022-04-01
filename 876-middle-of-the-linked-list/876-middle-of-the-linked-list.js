/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    var nodes = [];
    {let node = head;
     while(node){
         nodes.push(node);
         node = node.next;
     }
    }
    
    var middleNode = Math.floor(nodes.length / 2);
    return nodes[middleNode];
};