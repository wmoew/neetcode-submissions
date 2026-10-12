class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let pro = 0;
        let maxP = 0;
        for (let i = 0; i < prices.length; i++){
            for (let j = i; j < prices.length; j++){
                if ((prices[j] - prices[i]) > maxP){
                    maxP = prices[j] - prices[i];
                }
            }
            if (maxP > pro){
                pro = maxP;
            }
        }
        return pro;
    }
}
