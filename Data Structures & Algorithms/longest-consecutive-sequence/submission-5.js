class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let max = 0;
        if (nums.length === 0) return 0;
        for (let i = 0; i < nums.length; i++){
            //start of a sequence
            let count = 1;
            if (!numSet.has(nums[i] - 1)){
                let current = nums[i]; // this is the start
                while (numSet.has(current + 1)){
                    count++;
                    current++;
                }               
            }
            max = Math.max(count, max);
        }
        return max;
    }
}
