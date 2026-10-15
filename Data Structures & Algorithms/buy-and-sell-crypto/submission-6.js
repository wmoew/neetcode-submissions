class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0;
        let lowest = prices[0];
        for (let sell of prices){
            maxP = Math.max(sell - lowest, maxP);
            lowest = Math.min(lowest, sell);
        }
        return maxP;
    }
}
