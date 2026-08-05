class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numMap = new Map();
        for (let num of nums){
            numMap.set(num, (numMap.get(num) ?? 0) + 1);
        }
        const mapToArray = Array.from(numMap, ([key, value]) => [value, key]);
        const sortedArray = mapToArray.sort((a, b) => b[0] - a[0]).slice(0, k);
        const output = [];
        for (let item of sortedArray){
            output.push(item[1]);
        }
        return output;
    }
}
