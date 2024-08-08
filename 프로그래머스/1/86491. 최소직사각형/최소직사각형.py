from collections import deque

def solution(sizes):
    answer = 0
    list_a = []
    list_b = []
    
    for i in range(len(sizes)):
        if sizes[i][0] < sizes[i][1]:
            list_a.append(sizes[i][1])
            list_b.append(sizes[i][0])
        else:
            list_a.append(sizes[i][0])
            list_b.append(sizes[i][1])
            
    return max(list_a)*max(list_b)