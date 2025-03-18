function solution(t, p) {
    let cnt = 0;
    for(let i= 0; i <= t.length-p.length ; i++){
        let str = t.slice(i,p.length+i);
        if(+str <= p) cnt++;
    }
    return cnt

}
