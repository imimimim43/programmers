function solution(s) {
    var answer = [];
    
    for(let i of s){
        if(s.split(i).length-1 == 1){
            console.log(s);
            answer.push(i);
        }
    }
    return answer.sort().join('');
}