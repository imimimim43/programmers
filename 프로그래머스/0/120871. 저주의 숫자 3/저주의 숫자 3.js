function solution(n) {
    let answer = 1;
    for (let i = 1; i <= n; i++) {
        while (answer % 3 === 0 || (answer + '').includes('3')) {
            answer += 1;
        }
        answer += 1;
    }
    return answer-1;
}