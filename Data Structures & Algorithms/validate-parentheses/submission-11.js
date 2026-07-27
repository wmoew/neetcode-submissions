class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            '(': ')',
            '{': '}',
            '[': ']',
        };
        const stack = [];
        for (let i = 0; i < s.length; i++){
            let char = s[i];
            //if it is an open bracket, push it to stack
            if (pairs[char]){
                stack.push(pairs[char]);
            }else{
                if (stack.pop() !== char) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
