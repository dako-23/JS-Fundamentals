function solve(word, text) {

    text = text.toLowerCase();
    const textArr = text.split(' '); 

    if (textArr.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }








}
solve('javascript', 'JavaScript is the best programming language');