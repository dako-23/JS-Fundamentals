function solve(str) {

const pattern = /[A-Z][a-z]*/g;
const allMatches = str.matchAll(pattern);
const result = [];

for (const word of allMatches) {
    result.push(word);
}

console.log(result.join(', '));






}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');