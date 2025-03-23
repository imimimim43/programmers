function solution(my_string, letter) {
    let index = my_string.indexOf(letter);
    let answer = my_string.replaceAll(my_string[index],'');
    return answer;
}