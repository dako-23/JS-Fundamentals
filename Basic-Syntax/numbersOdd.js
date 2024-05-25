function solve(n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let odd = 2 * i + 1;
        console.log(odd);
        sum += odd;
    }

    console.log(`Sum: ${sum}`);
}

solve(3);