function solve(str) {

    let nonRepeatChars = '';
    let currentChar = '';



    for (const char of str) {

        if (char !== currentChar) {
            nonRepeatChars += char
            currentChar = char
        }

    }



    console.log(nonRepeatChars);





}
solve('aaaaabbbbbcdddeeeedssaa');