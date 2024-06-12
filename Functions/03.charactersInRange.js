function charactersInRange (char1, char2){

const code1 = char1.charCodeAt()
const code2 = char2.charCodeAt()

let result = [];


const startCode = Math.min(code1, code2);
const endCode = Math.max(code1, code2);

for(let curCode = startCode + 1; curCode < endCode; curCode++){
    let curChar = String.fromCharCode(curCode)
    result.push(curChar);
    
}


console.log(result.join(' '));


}
charactersInRange('a','d');