function solution(hp) {
    var answer = 0;
    
    for(let i=5; i > 0; i -= 2){
        answer += parseInt(hp/i);
        hp %= i;
    }
    return answer;
}