class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let seen = {};
        if (s.length !== t.length) return false;
        for (let i = 0; i < s.length; i++){
            seen[s[i]] = (seen[s[i]] || 0) + 1;
        }
        for (let i = 0; i < s.length; i++){
            if (!seen[t[i]] && seen[t[i]] !== 0) return false;
            if (seen[t[i]] > 0) seen[t[i]]--;
            if (seen[t[i]] == 0) delete seen[t[i]];
        }
        return true;
    }
}
