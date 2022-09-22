/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(
  head: ListNode | null,
  reverseNext: ListNode | null = null
): ListNode | null {
  if (!head) return null;
  const nextNode = head.next;
  head.next = reverseNext;
  return nextNode ? reverseList(nextNode, head) : head;
}