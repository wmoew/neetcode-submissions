/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        let result = true;
        function calculateHeight(node) {
            if (!node) return 0;
            const leftHeight = calculateHeight(node.left);
            const rightHeight = calculateHeight(node.right);
            // Return height of current subtree
            if (leftHeight > rightHeight + 1 || leftHeight < rightHeight - 1 ){
                result = false;
            };
            // Return height of current subtree
            return Math.max(leftHeight, rightHeight) + 1;
        }
        // Start the recursive calculation
        calculateHeight(root);
        return result;
    }
}
