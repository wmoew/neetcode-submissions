class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if (!nums) return [];
        const output = new Array(nums.length);
        
        // Count zeros
        let zeroCount = 0;
        for (let num of nums) {
            if (num === 0) zeroCount++;
        }
        // Calculate product of all non-zero elements
        let product = 1;
        for (let num of nums) {
            if (num !== 0) product *= num;
        }
        // Fill output array
        for (let i = 0; i < nums.length; i++) {
            if (zeroCount > 1) {
                // More than one zero means all products are zero
                output[i] = 0;
            } else if (zeroCount === 1) {
                // One zero means only the position with zero has non-zero product
                output[i] = nums[i] === 0 ? product : 0;
            } else {
                // No zeros, use division
                output[i] = product / nums[i];
            }
        }
        return output;
    }
}
