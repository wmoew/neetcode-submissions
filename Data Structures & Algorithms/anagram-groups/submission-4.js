class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map();
        for (let i = 0; i < strs.length; i++){
            const count = Array(26).fill(0);
            // make it an array with nums
            for (let j = 0; j < strs[i].length; j++){
                count[strs[i][j].charCodeAt(0) - 97]++;
            }
            const key = count.join(',');
            if (!res.has(key)) res.set(key, []);
            res.get(key).push(strs[i]);
        }
        return [...res.values()];
    }

}
