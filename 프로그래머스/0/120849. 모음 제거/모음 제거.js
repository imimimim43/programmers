function solution(my_string) {
    var answer = '';
    let arr = 'aeiou';
    
    for(let i of my_string){
        if(arr.indexOf(i) == -1){
            answer += i;
        }
    }
    return answer;
}

