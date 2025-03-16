function solution(nums) {
    var answer = 0;
    let new_arr = [...new Set(nums)];
    
    console.log(new_arr)
    
    if ((nums.length/2) > new_arr.length)
        answer = new_arr.length
    else
        answer = nums.length/2
    return answer;
}