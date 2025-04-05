function solution(quiz) {
    let answer = [];
    let new_quiz = [];

    for (let i = 0; i < quiz.length; i++) {
        new_quiz.push(quiz[i].split(" "));
    }

    for (let j = 0; j < new_quiz.length; j++) {
        let sum_quiz = Number(new_quiz[j][0]);

        for (let i = 1; i <= new_quiz[j].length - 1; i += 2) {
            if (new_quiz[j][i] === '=') {
                answer.push(sum_quiz === Number(new_quiz[j][i + 1]) ? "O" : "X");
                break;
            } else {
                new_quiz[j][i] === '+' 
                    ? sum_quiz += Number(new_quiz[j][i + 1]) 
                    : sum_quiz -= Number(new_quiz[j][i + 1]);
            }
        }
    }

    return answer;
}
