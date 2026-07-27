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
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head;
        let fast = head.next;
        while(fast !== null && fast.next !== null){
        if (fast == slow){
            return true;
        }
            slow = slow.next;
            fast = fast.next.next;
        }
        return false;
    //     let seen = new Set();
    //     let cur = head;
    //     while (cur) {
    //         if (seen.has(cur)) {
    //             console.log(seen)
    //             return true;
    //         }
    //         seen.add(cur);
    //         cur = cur.next;
    //     }
    //     return false;
    }
}