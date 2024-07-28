function solve(input) {

    let counter = 0;
    const pattern = /(@|#)([A-z]{3,})\1\1([A-z]{3,})\1/gm;
    const result = [];

    let match = pattern.exec(input);

    while (match) {
        counter++


        firstWord = match[2];
        secondWord = match[3];

        reversedWord = secondWord.split('').reverse().join('')

        if (firstWord === reversedWord) {
            result.push(`${firstWord} <=> ${secondWord}`)

        }

        match = pattern.exec(input)
    }

    if (counter === 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${counter} word pairs found!`);
    }

    if (result.length === 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(result.join(', '));
    }


}
solve(
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'

)

//5 word pairs found!
// The mirror words are:
// // Part <=> traP, leveL <=> Level, sAw <=> wAs