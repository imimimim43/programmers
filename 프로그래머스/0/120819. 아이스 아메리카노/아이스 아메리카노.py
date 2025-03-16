import math

def solution(money):
    answer = []
    answer.append(math.floor(money/5500))
    answer.append(money%5500)
    return answer