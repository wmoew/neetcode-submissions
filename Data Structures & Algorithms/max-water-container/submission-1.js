class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
            let l = 0, r = heights.length - 1;
            while (l < r){
                let contain = Math.min(heights[l], heights[r]) * (r - l)
                max = Math.max(contain, max);
                if (heights[l] <= heights[r]){
                    l++;
                }else{
                    r--;
                }
            }
            return max;
    }
}
