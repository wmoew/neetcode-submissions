class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let l = 0, r = cleaned.length - 1;
        while (l <= r){
            if (cleaned[l] == cleaned[r]){
                l++;
                r--;
            }else{
                return false;
            }
        }
        return true;
    }
}
