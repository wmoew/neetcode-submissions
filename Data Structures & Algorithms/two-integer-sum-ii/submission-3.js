class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let res = [];
        let l = 0, r = numbers.length - 1;
        while (l < r){
            if (numbers[l] + numbers[r] === target) return [l+1, r+1];
            if (numbers[l] + numbers[r] > target) r--;
            if (numbers[l] + numbers[r] < target) l++;
        }
    }
}
