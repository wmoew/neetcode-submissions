/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let node = head;
        let arr = [];
        while (node) {
            arr.push(node);
            node = node.next;
        }
        if (arr.length <= 1) return;
        for (let i = 0, j = arr.length - 1; i < j; ++i, --j) {
            arr[i].next = arr[j];
            arr[j].next = arr[i + 1];
        }
        arr[Math.floor(arr.length/2)].next=null
    }
}
