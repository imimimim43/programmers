function solution(spell, dic) {
    spell = spell.sort().join("");
    dic = dic.map((e)=> e.split("").sort().join(""));
    
    for(let i of dic){
        if(i.includes(spell)){
           return 1;
         };
    }
    return 2;
}