function solve(arr) {

    const n = arr.shift();
    let result = {};

    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = arr.shift().split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);

        if (car in result) {
            result[car].mileage += mileage
            result[car].fuel += fuel
        } else {
            result[car] = { mileage: mileage, fuel: fuel };
        }

    }

    let command = arr.shift();

    while (command !== 'Stop') {

        const tokens = command.split(' : ')

        const action = tokens.shift();
        const car = tokens.shift();



        if (action === 'Drive') {
            const distance = Number(tokens.shift());
            const fuel = Number(tokens.shift());

            if (result[car].fuel < fuel) {
                console.log('Not enough fuel to make that ride');
            } else {
                result[car].fuel -= fuel
                result[car].mileage += distance
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }

            if (result[car].mileage > 100000) {
                delete result[car]
                console.log(`Time to sell the ${car}!`);
            }

        } else if (action === 'Refuel') {
            const refillFuel = Number(tokens.shift())

            if (result[car].fuel + refillFuel > 75) {
                const betweenF = 75 - result[car].fuel
                console.log(`${car} refueled with ${betweenF} liters`);

                result[car].fuel = 75
            } else {

                result[car].fuel += refillFuel
                console.log(`${car} refueled with ${refillFuel} liters`);

            }


        } else if (action === 'Revert') {
            const kmToDegree = tokens.shift();

            if (result[car].mileage - kmToDegree < 10000) {
                result[car].mileage = 10000

            } else {
                result[car].mileage -= kmToDegree
                console.log(`${car} mileage decreased by ${kmToDegree} kilometers`);

            }


        }

        command = arr.shift();
    }


    const entries = Object.entries(result)
    for (const [name, stats] of entries) {
        console.log(`${name} -> Mileage: ${stats.mileage} kms, Fuel in the tank: ${stats.fuel} lt.`);

    }

}
// solve([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
// ])

solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);

// Not enough fuel to make that ride
// Aston Martin Valkryie driven for 99 kilometers. 23 liters of fuel consumed.
// Aston Martin Valkryie driven for 2 kilometers. 1 liters of fuel consumed.
// Time to sell the Aston Martin Valkryie!
// Lamborghini Veneno refueled with 1 liters
// Bugatti Veyron mileage decreased by 2000 kilometers
// Lamborghini Veneno -> Mileage: 11111 kms, Fuel in the tank: 75 lt.
// Bugatti Veyron -> Mileage: 10345 kms, Fuel in the tank: 67 lt.
// Koenigsegg CCXR -> Mileage: 67890 kms, Fuel in the tank: 12 lt.


// Audi A6 driven for 543 kilometers. 47 liters of fuel consumed.
// Mercedes CLS driven for 94 kilometers. 11 liters of fuel consumed.
// Not enough fuel to make that ride
// Audi A6 refueled with 50 liters
// Mercedes CLS mileage decreased by 500 kilometers
// Audi A6 -> Mileage: 10000 kms, Fuel in the tank: 65 lt.
// Mercedes CLS -> Mileage: 10594 kms, Fuel in the tank: 24 lt.
// Volkswagen Passat CC -> Mileage: 45678 kms, Fuel in the tank: 5 lt.