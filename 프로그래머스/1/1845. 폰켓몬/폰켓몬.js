function solution(nums) {
    const Max_count = nums.length/2;
    const new_arr = [...new Set(nums)];
    
    return Max_count > new_arr.length? new_arr.length:Max_count

}