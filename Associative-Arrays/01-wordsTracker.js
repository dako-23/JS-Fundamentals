function wordsTrackers(arr) {

    const targetWords = arr.shift().split(' ');
    const wordOccur = {};



    for (const word of targetWords) {
        wordOccur[word] = 0;

    }

    for (const searchedWord of arr) {

        if (searchedWord in wordOccur) {
            wordOccur[searchedWord]++
        }

    }

    const entries = Object.entries(wordOccur)
    const sortedEntries = entries.sort((a, b) => b[1] - a[1]);

    for (const [word, occur] of sortedEntries) {

        console.log(`${word} - ${occur}`);
        
    }





}
wordsTrackers([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);