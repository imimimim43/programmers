function solution(n) {
    var answer = 0;
    n = '' + n;
    
    for(let i of n.split("")){
        answer += Number(i);
    }
    return answer;
}