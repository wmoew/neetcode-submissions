class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < board.length; i++){
            let seen = new Set();
            for (let j = 0; j < board[i].length; j++){
                if (board[i][j] === ".") continue;
                if (seen.has(board[i][j])){
                    return false;
                }
                seen.add(board[i][j]);
            }
        }
        for (let i = 0; i < board[0].length; i++){
            let seen = new Set();
            for (let j = 0; j < board.length; j++){
                if (board[j][i] === ".") continue;
                if (seen.has(board[j][i])){
                    return false;
                }
                seen.add(board[j][i]);
            }
        }
        for (let sq = 0; sq < 9; sq++){
            let seen = new Set();
            for (let i = 0; i < 3; i++){
                for (let j = 0; j < 3; j++){
                    let row = Math.floor(sq / 3) * 3 + i;
                    let col = (sq % 3) * 3 + j;
                    if (board[row][col] === ".") continue;
                    if (seen.has(board[row][col])) return false;
                    seen.add(board[row][col]);
                }
            }
        }
        return true;
}
}