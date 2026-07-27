class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0;
        for (let detail of details){
            let age = detail[11] + detail[12];
            if (parseInt(age) > 60){
                count++;
            }
        }
        return count;
    }
}
