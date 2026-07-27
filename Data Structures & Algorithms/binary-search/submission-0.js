class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (target > nums[nums.length - 1] || target < nums[0]){
            return -1;
        }else{
            let left = 0;
            let right = nums.length - 1;

            while (left <= right) {
                let mid = Math.floor((left + right)/2);
                if ((nums[mid]) === target){
                    return mid;
                }
                if (nums[mid] > target){
                    right = mid - 1;
                }
                if (nums[mid] < target){
                    left = mid + 1;
                }
            }

        // if (target === nums[left]){
        //     return left;
        // }
        // while (nums[left]< target){
        //     left++;
        // }
        // while (nums[left] > target){
        //     left--;
        // }
        // return -1;
        return -1;
    }
}
}