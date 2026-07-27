class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const sClean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        const sReverse = sClean.split('').reverse().join('');
        if (sClean === sReverse){
            return true;
        }
        return false;
    }
}
