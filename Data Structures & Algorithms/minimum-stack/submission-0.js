class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];// Auxiliary stack to track minimums
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        // If minStack is empty or the new value is less than or equal to current min
        // Push it to minStack
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }
    /**
     * @return {void}
     */
    pop() {
        // Before popping, check if we're removing the current minimum
        if (this.stack[this.stack.length - 1] === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        this.stack.pop();
    }
    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        // let min = Infinity;
        // for (let i = 0; i < this.stack.length; i++){
        //     if (this.stack[i] < min){
        //         min = this.stack[i];
        //     }
        // }
        // return min;
        return this.minStack[this.minStack.length - 1];
    }
}
