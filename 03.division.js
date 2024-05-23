function solve(num) {

    let divNum = [10, 7, 6, 3, 2]

    for (let i = 0; i < divNum.length; i++) {
        let divisors = divNum[i];
        if (num % divisors === 0) {
            console.log(`The number is divisible by ${divisors}`);
            return;
        }

    }

    console.log('Not divisible');






}
solve(1643);

