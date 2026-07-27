class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueNums = new Set();
        for (let i = 0; i < nums.length; i++){
            uniqueNums.add(nums[i]);
        }
        if (uniqueNums.size === nums.length){
            return false;
        }
        return true;
        }
}
