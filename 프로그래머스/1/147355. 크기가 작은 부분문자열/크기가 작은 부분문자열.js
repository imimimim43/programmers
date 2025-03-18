function solution(t, p) {
    var answer = 0;
    let cnt = 0;
    for(let i= 0; i <= t.length-p.length ; i++){
        answer = t.slice(i,p.length+i);
        if(answer - p <= 0){
            cnt += 1;
        }
    }
    return cnt

}
