class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
        function isAorN(char) {
        return ((char >= 'a' && char <= 'z') || 
                (char >= 'A' && char <= 'Z') || 
                (char >= '0' && char <= '9'));
                };

        let l = 0, r = s.length - 1;
        while(l <= r){
            while (l < r && !isAorN(s[l])) {
                l++;
            }
            while(r > l && !isAorN(s[r])){
                r--;
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
