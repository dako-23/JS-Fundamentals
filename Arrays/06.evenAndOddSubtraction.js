function solve(arr) {

    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);

    }

    for (const evenNum of arr) {
        if (evenNum % 2 === 0) {
            sumEven += evenNum
        } else{
            sumOdd += evenNum
        }
    }

    // for (const oddNum of arr) {
    //     if (oddNum % 2 === 1) {
    //         sumOdd += oddNum
    //     }
    // }
    console.log(sumEven - sumOdd);

}
solve([2, 4, 6, 8, 10]);
solve([3,5,7,9])
solve([1,2,3,4,5,6])