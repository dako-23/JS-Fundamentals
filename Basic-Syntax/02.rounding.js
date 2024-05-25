function solve(number, precision) {

    if (precision > 15) {
        precision = 15;
    }

    let fixedNum = number.toFixed(precision)
    console.log(parseFloat(fixedNum));

}
solve(10.5, 3);