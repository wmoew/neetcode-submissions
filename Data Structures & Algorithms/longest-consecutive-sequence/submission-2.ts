class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length == 0) return 0;
        const numSet: Set<number> = new Set(nums);
        let longest = 1;
        for (let num of numSet){
            let currentStreak = 1;
            if (!numSet.has(num - 1)){
                //this is the start of the consecutive
                while(numSet.has(num+1)){
                    currentStreak += 1
                    num = num + 1;
                }
                longest = Math.max(longest, currentStreak);
            }
        }
        return longest;
    }

}
