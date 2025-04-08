function solution(numbers) {
    let n = numbers.length-1;
    console.log(numbers.sort((a,b)=> a-b));
    return numbers[0]*numbers[1] > numbers[n]*numbers[n-1]? numbers[0]*numbers[1] : numbers[n]*numbers[n-1];
    
}