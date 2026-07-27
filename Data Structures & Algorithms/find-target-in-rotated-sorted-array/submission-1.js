class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        
        // Find the pivot point (minimum element/rotation point)
        // This is where the array was rotated
        while (l < r){
            let m = Math.floor((l+r) / 2);
            // If mid > right, the minimum is in the right half
            if (nums[m] > nums[r]) { 
                l = m + 1;
            } else {
                r = m;
            }
        }
        const pivot = l; //find the min
        const result = this.binarySearch(nums, target, 0, pivot - 1);

        if (result !== -1) {
            return result;
        }
        return this.binarySearch(nums, target, pivot, nums.length - 1);
    }
    binarySearch(nums, target, left, right) {
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
}
