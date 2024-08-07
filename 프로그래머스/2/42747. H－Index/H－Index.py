def solution(citations):
    citations.sort(reverse=True)
    return max(min(i + 1, c) for i, c in enumerate(citations))