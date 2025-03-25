function solution(letter) {
    var answer = '';
    
    let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z' };

    while(letter.length > 0){
        answer += morse[letter.slice(0, letter.indexOf(' '))];
        letter = letter.slice(letter.indexOf(' ')+1,);
        
        if(letter.indexOf(' ') === -1){
         answer += morse[letter];
         letter = '';
        }
    }
    return answer;
}