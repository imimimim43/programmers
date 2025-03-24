function solution(age) {
    var answer = '';
    
    for(let i of String(age)){
        answer += String.fromCharCode(i.charCodeAt()+49);
    }
    return answer;
}