class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0, longest = 0;
        let sub = new Set();
        for (let i = 0; i < s.length; i++){
            while (sub.has(s[i])){
                sub.delete(s[l]);
                l++;
            }
            sub.add(s[i]);
            longest = Math.max(longest, sub.size);
        }
        return longest;
    }
}
