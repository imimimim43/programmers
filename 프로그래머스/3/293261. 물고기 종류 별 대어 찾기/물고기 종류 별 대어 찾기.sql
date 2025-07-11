SELECT ID, C.FISH_NAME , B.MAX_LENGTH AS LENGTH
FROM FISH_INFO AS A
JOIN (SELECT MAX(LENGTH) AS MAX_LENGTH, FISH_TYPE AS FISH_TYPE
      FROM FISH_INFO
      GROUP BY FISH_TYPE
      HAVING MAX_LENGTH > 10) AS B ON B.FISH_TYPE = A.FISH_TYPE AND B.MAX_LENGTH = A.LENGTH
JOIN FISH_NAME_INFO AS C ON C.FISH_TYPE = A.FISH_TYPE
ORDER BY ID