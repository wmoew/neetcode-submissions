class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let res = nums[0];

        while (l <= r){
            if (nums[l] <= nums[r]){
                res = Math.min(res, nums[l]); //min is somewhere in the middle
                break;
            }

            let m = l + Math.floor((r - l)/2);
            res = Math.min(res, nums[m]) // compare the middle and index[0]
            if (nums[m] >= nums[l]){
                l = m + 1; // go to the right side to search
            }else{
                r = m - 1; // if middle value < index[0], go to the left side to search
            }
            
        }
        return res;
    }
}
