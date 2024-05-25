function solve (word, symbol, rightWord){

  let result = ''



    for (let i = 0; i < word.length; i++) {
        
        if(word[i] === '_'){
            result += symbol;
        } else {
            result += word[i];
        }
    }



let output = result === rightWord? 'Matched': 'Not Matched';

console.log(output);


}
solve('Str_ng', 'I', 'Strong');
solve('Str_ng', 'i', 'String')