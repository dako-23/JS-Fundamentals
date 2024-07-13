function solve(sentence, word) {

    let counter = 0;

    const sentenceArr = sentence.split(' ');

    for (const w of sentenceArr) {

        if(w === word){

            counter++
        }
        
    }



console.log(counter);




}
solve('This is a word and it also is a sentence', 'is')