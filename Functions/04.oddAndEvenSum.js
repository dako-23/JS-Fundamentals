function oddAndEvenSum(num) {

    let sumEven = 0;
    let sumOdd = 0;

    let numStr = `${num}`;

    for (let i = 0; i < numStr.length; i++) {

        let curDigit = Number(numStr[i]);
        if (curDigit % 2 === 0) {

            sumEven += curDigit

        } else {
            sumOdd += curDigit
        }


    }



    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
    

}
oddAndEvenSum(3495892137259234);