function solve(input, cWord) {

    let result = input;
    const censoredWord = '*'.repeat(cWord.length)

    while (result.includes(cWord)) {

        result = input.replace(cWord, censoredWord)

    }

    console.log(result);









}
solve('Find the hidden word', 'hidden');