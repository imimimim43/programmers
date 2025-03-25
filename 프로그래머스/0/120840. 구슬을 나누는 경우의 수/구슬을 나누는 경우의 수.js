function factorial(n){
    if(n === 1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

function solution(balls, share) {
    if(balls === share){
        return 1;
    }
    return Math.round(factorial(balls)/(factorial(balls-share)*factorial(share)));
}