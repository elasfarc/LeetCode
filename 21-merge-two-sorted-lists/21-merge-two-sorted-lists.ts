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
  list2: ListNode | null,
  head = new ListNode(),
  current = head
): ListNode | null {
  if (!list1 || !list2) {
    if ([list1, list2].every(isNil)) return head.next;
    if (!list1) {
      current.next = list2;
      return head.next;
    }
    if (!list2) {
      current.next = list1;
      return head.next;
    }
  }
  let small = list1.val < list2.val ? list1 : list2;
  let big = small == list1 ? list2 : list1;

  while (small && small.val <= big.val) {
    current.next = small;
    current = current.next;
    small = small.next;
  }

  current.next = big;

  return mergeTwoLists(small, big.next, head, current.next);
}

function isNil<T>(v: T | null): v is null {
  return v == null;
}
