function solve(num) {

    const stringNum = `${num}`;

    let sum = 0;


    for (let i = 0; i < stringNum.length; i++) {
        sum += Number(stringNum[i]);
    }

    let isAmazing = "False";
    let stringSum = `${sum}`;

    for (let i = 0; i < stringSum.length; i++) {
        if(stringSum[i] === '9'){
            isAmazing = 'True'
            break;
        }
        
    }


    console.log(`${num} Amazing? ${isAmazing}`);

}
solve(999);
solve(1233);