function solution(t, p) {
    var answer = 0;
    let cnt = 0;
    for(let i= 0; i < (t.length-p.length)+1; i++){
        answer = t.slice(i,p.length+i);
        if(Number(answer) <= Number(p)){
            cnt += 1;
        }
    }
    return cnt

}
