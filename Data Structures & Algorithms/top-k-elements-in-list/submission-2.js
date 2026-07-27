class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let seen = {};
        for (let num of nums){
            if (!seen[num]) {
                seen[num] = 0
            }
            seen[num]++;
        }
        //seen = {1: 3, 2: 2, 3: 1} -> [['1', 3], ['2', 2], ['3', 1]] -> [[3, 1], [2, 2], [1, 3]]
        const arr = Object.entries(seen).map(([num,freq]) => [freq, parseInt(num)])
        //[[3, 1], [2, 2], [1, 3]]
        arr.sort((a, b) => b[0] - a[0]);
        //.map(pair => pair[1]): Extracts just the numbers (second element)
        //If k=2: [[3, 1], [2, 2]] → [1, 2]
        return arr.slice(0, k).map(pair => pair[1]);
        }
}