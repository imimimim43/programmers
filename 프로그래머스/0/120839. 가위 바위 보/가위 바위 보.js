function solution(rsp) {
    var answer = '';
    
    let win = {'2':'0', '5':'2', '0':'5'};
    
    for(let i of String(rsp)){
        answer += win[i];
    }
    return answer;
}