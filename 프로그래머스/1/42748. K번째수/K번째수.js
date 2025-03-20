function solution(array, commands) {
    var answer = [];
    for(let i= 0; i < commands.length; i++){
        var temp_array = [];
        temp_array = array.slice(commands[i][0]-1,commands[i][1]);
        temp_array.sort((a, b) => a - b);
        answer.push(temp_array[commands[i][2]-1])
    }
    return answer;
}