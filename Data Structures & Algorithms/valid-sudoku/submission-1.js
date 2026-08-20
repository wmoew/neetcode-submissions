class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let row of board){
            let rowSet = new Set();
            for (let numStr of row){
                if(numStr === '.') continue;
                if (rowSet.has(parseInt(numStr))){
                    return false;
                }
                rowSet.add(parseInt(numStr));
            }
        }
        for (let i = 0; i < 9; i++){
            let colSet = new Set();
            for (let row of board){
                if(row[i] === '.') continue;
                if (colSet.has(parseInt(row[i]))) return false;
                colSet.add(parseInt(row[i]));
            }
        }
        for (let x = 0; x < 9; x += 3){
            for (let y = 0; y < 9; y += 3){
                let cubeSet = new Set();
                for (let i = 0; i < 3; i++){
                    for (let j = 0; j < 3; j++){
                        //b[0][0,1,2] b[1][0,1,2] b[2][0,1,2] 
                        if (board[x + i][y + j] == '.') continue;
                        if (cubeSet.has(board[x + i][y + j])) return false;
                        cubeSet.add(board[x + i][y + j]);
                    }
                }
            }
        }
        return true;
    }
}
