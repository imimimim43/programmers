function solution(num, k) {
    const arr = (""+num).split("");
    return arr.indexOf(""+k)===-1? -1: arr.indexOf(""+k)+1;
}

