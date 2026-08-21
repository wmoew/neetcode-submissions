class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 0) return 0;
        let max = 1;
        const sorted = nums.sort((a, b) => a - b);
        let l = 0, r = 1;
        while (l < sorted.length && r < sorted.length){
            if (sorted[r] === sorted[r-1]){
                l++;
                r++;
            } else if (sorted[r] === sorted[r - 1] + 1){
                max = Math.max(r-l+1, max);
                r++;
            } else {
                let temp = r;
                l = temp;
                r = l + 1;
            }
        }
        return max;
    }
}
