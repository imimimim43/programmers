function solution(dots) {
    console.log(dots.sort());
    return Math.abs(dots[3][0]-dots[0][0])*Math.abs(dots[3][1]-dots[0][1]);
}