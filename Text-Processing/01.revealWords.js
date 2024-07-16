function solve(wordsStr, text) {

    const wordsToFill = wordsStr.split(", ")

    const textWords = text.split(" ");
    const templates = textWords.filter(word => word.includes('*'));



    for (let template of templates) {

        

        const rightWord = wordsToFill.find(word => word.length === template.length)
        text = text.replace(template, rightWord)



    }





    console.log(text);



}
solve('great', 'softuni is ***** place for learning new programming languages');