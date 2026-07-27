class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {};
        for(let i = 0; i < nums.length; i++){
            const sub = target - nums[i];
            if(seen[sub] >= 0){
                return [seen[sub], i];
            }
            seen[nums[i]] = i;
        }
        return [];



        // let seen = new Map();
        // for (let i = 0; i < nums.length; i++){
        //     // seen.set(nums[i], i);
        //     if (seen.has((target - nums[i]))){
        //         return [seen.get((target - nums[i])), i];
        //     }
        //     seen.set(nums[i], i);
        // }
        // return [];
    }
}
