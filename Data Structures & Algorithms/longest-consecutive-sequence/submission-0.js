class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let sorted = nums.sort((a, b) => a - b);
        const unique = new Set(sorted);
        console.log(unique);
        let longest = 0;
        for (let num of unique){
            if (!unique.has(nums - 1)){
                let length = 1;
                while(unique.has(num + length)){
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}
