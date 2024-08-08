from collections import deque

def solution(sizes):
    answer = 0
    row = 0
    col = 0
    
    for i, j in sizes:
        if i < j:
            i, j = j, i
        row = max(row, i)
        col = max(col, j)
    
    return row*col