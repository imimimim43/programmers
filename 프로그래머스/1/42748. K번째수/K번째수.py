def solution(array, commands):
    answer = []
    list_a = []
    for i in range(len(commands)):
        list_a = array[commands[i][0]-1: commands[i][1]]
        list_a.sort()
        answer.append(list_a[commands[i][2]-1])
        
    return answer