class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // locate subarray
        let l = 0;
        let r = matrix.length - 1;
        while (l <= r){
            let m = Math.floor((l + r)/2);
            if (matrix[m][0] > target){
                r = m - 1;
            }else if(matrix[m][matrix[m].length - 1] < target){
                l = m + 1;
            }else{
                let left = 0;
                let right = matrix[m].length - 1;
                while (left <= right){
                    let mid = Math.floor((left + right)/2);

                    if (matrix[m][mid] === target) return true;
                    if (matrix[m][mid] > target){
                        right = mid - 1;
                    }else{
                        left = mid + 1;
                    }
                }
                return false;
            }
        }
        return false;

    }
}
