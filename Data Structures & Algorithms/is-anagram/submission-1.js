class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length){
            return false;
        }
        let seen = {};
        for (let i = 0; i < s.length; i++){
            if (!seen[s[i]]){
                seen[s[i]] = 1;
            }else{
                seen[s[i]]++;
            }
        }

        for (let i = 0; i < t.length; i++){
            if (!seen[t[i]]){
                return false;
            }else{
                seen[t[i]]--;
            }
        }
        for (let char in seen){
            if (seen[char]!==0){
                return false;
            }
        }
        return true;
    }
}