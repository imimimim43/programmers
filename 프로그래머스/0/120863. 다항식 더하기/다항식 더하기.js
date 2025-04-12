function solution(polynomial) {
    polynomial = polynomial.split(" ").filter((e)=> e != '+');
    let result = [0,0];
    
    const replaced = polynomial.map(function(e){
    if(e.includes('x')){
        result[0] += Number(e.slice(0, e.indexOf('x')))===0?1:Number(e.slice(0, e.indexOf('x')));
    }
    else{
        result[1] += Number(e); 
    }

    return e;
});
    
    if(result[0]===1 && result[1]===0){
        return 'x';
    }
    else if(result[1]===0){
        return result[0] + 'x';
    }
    else if(result[0]===1){
        return 'x' + ' + ' + result[1];
    }
    else if(result[0]===0){
        return ''+result[1];
    }
    return result[0] + 'x' + ' + ' + result[1];

}