class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        console.log(clean);
        console.log(clean.split('').reverse().join(''));
        return (clean.split('').reverse().join('') === clean);
    }
}
