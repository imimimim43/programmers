function solution(emergency) {
    var answer = [];
    let emergency_copy = [...emergency];
    
    emergency_copy = emergency_copy.sort((a,b) => b-a);

    return emergency.map(n => emergency_copy.indexOf(n) + 1);

}