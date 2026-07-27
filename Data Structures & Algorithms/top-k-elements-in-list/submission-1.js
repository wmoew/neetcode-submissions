class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // let seen = {};
        // for (let num of nums){
        //     if (seen[num] !== 0){
        //         seen[num]++;
        //     }else{
        //         seen[num] = 1;
        //     }
        // };
        // let array = [];
        // const arr = Object.entries(seen).map(([num, freq]) => [freq, parseInt(num)]);
        // arr.sort((a,b) => b[0] - a[0]);
        // return arr.slice(0, k).map(pair => pair[1]);
        let seen = {};
        for (let num of nums){
            if (!seen[num]) {
                seen[num] = 0
            }
            seen[num]++;
        }
        //seen: {1:1, 2:2, 3:3} =>
        const arr = Object.entries(seen).map(([num,freq]) => [freq, parseInt(num)])

        arr.sort((a, b) => b[0] - a[0]);
        return arr.slice(0, k).map(pair => pair[1]);

        }
}