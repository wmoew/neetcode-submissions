class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        function stringToOperator(operatorString) {
        if (operatorString === '+') return (a, b) => a + b;
        if (operatorString === '-') return (a, b) => a - b;
        if (operatorString === '*') return (a, b) => a * b;
        if (operatorString === '/') return (a, b) => Math.trunc(a / b);
        }

        let nums = [];
        let output = null;
        for (const token of tokens){
            if (['+', '-', '*', '/'].includes(token)) {
                const b = Number(nums.pop());
                const a = Number(nums.pop());
                const operation = stringToOperator(token);
                nums.push(operation(a, b));
            }else{
                //if token is a number
                nums.push(Number(token));
            }
            // if (token % 2 == undefined){
            //     output = output token nums.pop()
            // }else{
            //     nums.push(token);
            // }
        }
        output = nums[0];
        return nums.pop();
    }
}
