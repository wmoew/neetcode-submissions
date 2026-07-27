class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        //pick two index, that (r - l) * Math.min(heights[r], heights[l] is the biggest
        let l = 0; 
        let r = heights.length - 1;
        let maxV = 0;
        while (r > l){
            let v = (r - l) * Math.min(heights[r], heights[l]);
            console.log(v);
            if (heights[r] < heights[l]){
                r--;
            }else{
                l++;
            }
            maxV = Math.max(maxV, v);
    }
    return maxV;

}
}