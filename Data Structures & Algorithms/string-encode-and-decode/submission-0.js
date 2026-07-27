class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (const str of strs){
            result += str.length + "#" + str //neet -> 4#neet
        }
        console.log(result);
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;
        
        while (i < str.length) {
            // Find the position of the delimiter
            let j = i; // 0
            while (str[j] !== '#') { // j = i = 0 // 6
                j++; // j = 1
            }
            
            // Parse the length of the next string
            const length = parseInt(str.substring(i, j)); // 4
            
            // Extract the string using the length
            const s = str.substring(j + 1, j + 1 + length); // substring(2, 6)
            result.push(s);
            
            // Move the pointer to the start of the next length indicator
            i = j + 1 + length; // i = 6
        }
        
        return result;

    }
}
