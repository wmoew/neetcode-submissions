class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // let max = 0;
        // for (let i = 0; i < prices.length; i++){
        //     for (let j = i + 1; j <prices.length; j++){
        //         if(prices[j] > prices[i]){
        //            const profit = prices[j] - prices[i];
        //            max = Math.max(max, profit)
        //         }
        //     }
        // }
        // return max;
        let l = 0;          // Left pointer (buy)
        let r = 1;          // Right pointer (sell)
        let maxP = 0;       // Initialize max profit
                while (r < prices.length) {
            // If current price is higher than buy price, calculate profit
            if (prices[l] < prices[r]) {
                let profit = prices[r] - prices[l];
                maxP = Math.max(maxP, profit);
            } else {
                // If we found a lower price, update buy position
                l = r;
            }
            // Always move the sell position forward
            r += 1;
        }
        
        return maxP;
    }
}
