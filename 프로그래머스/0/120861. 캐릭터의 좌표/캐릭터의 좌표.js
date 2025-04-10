function solution(keyinput, board) {
    board = board.map((e)=> Math.floor(e/2));
    console.log(board);
    let d = {"left":[-1,0], "right":[1,0], "up": [0,1], "down":[0,-1]};
    let result = [0,0];
    
    for(let i of keyinput){
        if((i==="left" || i==="right") && Math.abs(result[0] + d[i][0]) > board[0]){
            continue;
        }
        
        if((i==="up" || i==="down") && Math.abs(result[1] + d[i][1]) > board[1]){
            continue;
        }
        result[0] += d[i][0];
        result[1] += d[i][1];
        
        console.log(result);
    }
    return result;
    
}