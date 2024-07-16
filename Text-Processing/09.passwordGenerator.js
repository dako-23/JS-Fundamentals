function solve(arr) {

    const [arr1, arr2, replacerArr] = arr

    let password = arr1 + arr2;
    let replacerIdx = 0;

    for (const char of password) {
        if (/[aeoui]/.test(char)) {
            const replacementChar = replacerArr[replacerIdx]
            password = password.replace(char, replacementChar.toUpperCase());
            replacerIdx++

            if(replacerIdx === replacerArr.length){
                replacerIdx = 0;
            }
        }

    }


const reversed = password.split('').reverse().join('');

console.log(`Your generated password is ${reversed}`);


}
solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
])