function solve(arr) {

    const wordOccurr = {}

    for (const word of arr) {
        wordOccurr[word] = 0

    }

    for (const word of arr) {
        if (word in wordOccurr) {
            wordOccurr[word]++
        }

    }

    const entries = Object.entries(wordOccurr);
    entries.sort((a, b) => b[1] - a[1]);

    for (const [word, counter] of entries) {

        console.log(`${word} -> ${counter} times`);
        
    }








}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);