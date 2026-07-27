class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        return details.filter(d => d.substring(11, 13) > 60).length;
    }
}
