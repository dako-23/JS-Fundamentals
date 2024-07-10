function oddOccurrences(str) {
    const wordOccurrences = new Map()
    const words = str.split(' ').map(word => word.toLowerCase());

    for (const word of words) {

        if (wordOccurrences.has(word)) {
            const curOccur = wordOccurrences.get(word)
            wordOccurrences.set(word, curOccur + 1);
        } else {
            wordOccurrences.set(word, 1)
        }
    }


    const entries = wordOccurrences.entries()

    const arrResult = []
    for (const [name, qty] of entries) {
        if (qty % 2 === 1) {
            arrResult.push(name)
        }

    }

    console.log(arrResult.join(' '));






}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');