function solution(s) {
    var answer = 0;
    
    let arr_s = s.split(' ');
    
    for(let i=0; i<arr_s.length ; i++){
        if(arr_s[i+1] == 'Z' || arr_s[i]== 'Z'){
            continue;
        }
        answer += Number(arr_s[i]);
    }
    return answer;
}