class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanedUpArray = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('');
        let cleanedUpString = cleanedUpArray.join('');
        console.log(cleanedUpString);
        let reversedString = cleanedUpArray.reverse().join('');
        console.log(reversedString);
        if (cleanedUpString == reversedString){
            return true;
        }
        return false;
    }
}
