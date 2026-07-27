class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs){
        //create an empty object to store arrays
        let res = {};
        for (let str of strs){
            let sortedStr = str.split('').sort().join('');
            if (!res[sortedStr]){
                res[sortedStr] = [str]
            }else{
                res[sortedStr].push(str);
            }
        }
        return Object.values(res);
}
}
