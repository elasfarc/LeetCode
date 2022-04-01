/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  var vals = '';
    
    {let node = head;
        while(node){
            vals+= node.val;
            node = node.next;
        }
    }
    
    return parseInt(vals, 2);
};