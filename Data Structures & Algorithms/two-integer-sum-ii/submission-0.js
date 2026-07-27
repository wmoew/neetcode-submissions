class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;
        while (l < r){
            if (l > 0 && numbers[l] === numbers[l - 1]) continue;
            if (r < numbers.length - 1 && numbers[r] === numbers[r + 1]) continue;
            
            if (numbers[l] + numbers[r] === target){
                return [l + 1, r + 1];
            }else if (numbers[l] + numbers[r] < target){
                l++;
            }else{
                r--;
            }
        }
}
}
