function solution(my_string) {
    my_string = my_string.split(/[A-z]/).filter(e=> e !== '');
    
    var answer = 0;
    for(let i of my_string){
        answer += 1*i;
    }
    
    return answer;
}