class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let seen = {};
        for (let i = 0; i < strs.length; i++){
            let sortedString = strs[i].split('').sort().join('');
            if (seen[sortedString]) {
                seen[sortedString].push(strs[i]);
            }else{
                seen[sortedString] = [strs[i]];
            }
        }
        return Object.values(seen); 
    }
}
