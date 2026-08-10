class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const res = [];
        for (let str of strs){
            res.push(String(str.length), "#", str);
        }
        return res.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */

    // [5#hello5#world]
    decode(str) {
        let res = [];
        let i = 0;
        while (i < str.length){
            let j = i;
            while (str[j] !== "#"){
                j++;
            }
            //j = 1
            let length = parseInt(str.substring(i, j));
            i = j + 1; //i = 2
            j = i + length; // j = 7
            res.push(str.substring(i, j)) // substring(2, 7) = hello
            i = j;//i = 7
        }
        return res;
    }
}
