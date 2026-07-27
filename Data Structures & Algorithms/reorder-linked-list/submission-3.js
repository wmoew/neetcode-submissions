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
        console.log('q:', queue);
        console.log('s:', stack);
        while(stack.length > 0 && queue.length > 0){
            node = queue.shift();
            console.log('1:', node)
            node.next = stack.pop();
            console.log('2:',node)
            node.next.next = queue.length > 0? queue[0]: null
            console.log('3:',node)
        }
        console.log('s:', stack);
        if (length %2 !== 0) {
            node.next.next = stack[0];
            node.next.next.next = null;
        }
        return node;
        // console.log(this.lengthOfLL(head))
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
