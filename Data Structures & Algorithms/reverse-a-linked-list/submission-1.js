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
     * @return {ListNode}
     */
    reverseList(head) {
        // Handle edge case: empty list or single node
        if (!head || !head.next) return head;

        let prev = null;
        let curr = head;

        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        return prev;

        // let array = [];
        // while (head !== null){
        // array.push(head);
        // head = head.next;
        // }
        // array.reverse();
        // console.log(array)
        // for (let i = 0; i < array.length; i++) {
        //     if (i == array.length - 1){
        //         array[i].next = null;
        //     }else{
        //         array[i].next = array[i+1];
        //     }
        // }
        // return array[0];
    }
}
