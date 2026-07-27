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
     * @return {number}
     */
    maxDepth(root) {
        if (!root) return 0;

        const stack = [[root, 1]];
        let maxDepth = 0;

        while(stack.length > 0){
            const [current, depth] = stack.pop();
            maxDepth = Math.max(depth, maxDepth);
            if (current.left) stack.push([current.left, depth + 1]);
            if (current.right) stack.push([current.right, depth + 1]);
        }
        return maxDepth;
    }
}
