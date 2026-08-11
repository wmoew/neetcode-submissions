class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    //input ["Hello","World"]
    //output "5#Hello5#World"
    encode(strs) {
        let res = '';
        for (let str of strs){
            res += str.length.toString() + '#' + str; 
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    //input "5#Hello5#World"
    //output ["Hello","World"]
    decode(str) {
        const res = [];
        let i = 0;
        let j = 0;
        while (j < str.length){
            if (str[j] !== '#'){
                j++;
            }else{
                let string = str.substring(j + 1, j + 1 + parseInt(str.substring(i, j)));
            res.push(string);
            j = j + 1 + parseInt(str.substring(i, j));
            i = j;
            } 
        }
        return res;
    }
}
