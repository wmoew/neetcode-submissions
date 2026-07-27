class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0;
        let l = 0;
        // Use a Set to store characters in the current window [left, right]
        const seen = new Set();
        // The right pointer (right) expands the window
        for (let r = 0; r < s.length; r++) {
            while (seen.has(s[r])){
                seen.delete(s[l]);
                l++;
            }
                seen.add(s[r]);
                res = Math.max(res, r - l + 1);
            }
            return res;
        }
}