class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0;
        let lowest = 0;
        for (let sell = 1; sell < prices.length; sell++){
            if (prices[sell] < prices[lowest]) {
            lowest = sell;
        }
            maxP = Math.max(prices[sell] - prices[lowest], maxP);
        }
        return maxP;
    }
}
