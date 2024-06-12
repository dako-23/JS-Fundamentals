function perfectNumber(num) {

    let sum = 0;

    for (let divisor = 1; divisor < num; divisor++) {


        if (num % divisor === 0) {
            sum += divisor
        }
        console.log(sum);

    }
    // console.log(sum);


}
perfectNumber(6);