function solve(input) {

    let username = input[0];
    let attempt = 0;
    let rightPassword = username.split('').reverse().join('');

    for (let index = 1; index < input.length; index++) {
        let attemptPassword = input[index];
        attempt++
        if (attemptPassword === rightPassword) {
            console.log(`User ${username} logged in.`);
        } else if (attempt === 4) {
            console.log(`User ${username} blocked!`);
        } else {
            console.log('Incorrect password. Try again.');
        }
    }


}
// solve(['Acer', 'login', 'go', 'let me in', 'recA']);
// solve(['momo','omom']);
solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);


// if (attempt === 4) {
//     console.log(`User ${username} blocked!`);

// } else {
//     console.log('Incorrect password. Try again.');
// }