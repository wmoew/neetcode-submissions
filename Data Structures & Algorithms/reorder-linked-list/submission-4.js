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
        let queue = [];
        const length = this.lengthOfLL(head);
        if (length == 1) return;
        let halfList = Math.floor(length/2);
        for (let i = 0; i < halfList; i++){
            queue.push(node);
            node = node.next;
        }
        let stack = [];
        for (let i = halfList + 1; i <= length; i++){
            stack.push(node);
            node = node.next;
        }
        while(stack.length > 0 && queue.length > 0){
            node = queue.shift();
            node.next = stack.pop();
            node.next.next = queue.length > 0 ? queue[0] : null;
        }
        if (length % 2 !== 0) {
            node = node.next;
            node.next = stack[0];
            node.next.next = null;
        }
    }
    lengthOfLL(head){
        let length = 0;
        while(head!== null){
            head = head.next;
            length++;
        }
        return length;
    }
}
