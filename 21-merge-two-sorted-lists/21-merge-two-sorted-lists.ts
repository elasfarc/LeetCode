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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  return isNil(list1)
    ? list2
    : isNil(list2)
    ? list1
    : list1.val < list2.val
    ? ((list1.next = mergeTwoLists(list1.next, list2)), list1)
    : ((list2.next = mergeTwoLists(list1, list2.next)), list2);
}

/******** */

function isNil<T>(v: T | null): v is null {
  return v == null;
}