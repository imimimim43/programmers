function fatorial(n){
    if(n === 1){
        return 1;
    }
    else{
        return n*fatorial(n-1);
    }
}

function solution(n) {
    let fatorial_arr = [];
    for(let i = 1; i<11; i++){
        fatorial_arr.push(fatorial(i));
    }
    
    fatorial_arr.push(n+1);
    fatorial_arr.sort((a,b)=> a-b);
    return fatorial_arr.indexOf(n+1);
}