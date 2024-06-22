function solve(arr) {

    let totalPriceNoTax = 0;
    let totalTax = 0;

    let command = arr.shift();

    while (command !== 'special' && command !== 'regular') {
        let partPrice = Number(command)

        if (partPrice <= 0) {
            console.log('Invalid price!');
            command = arr.shift();
            continue;
        }
        totalPriceNoTax += partPrice
        command = arr.shift();
    }


    totalTax = totalPriceNoTax * 0.2;
    let totalPriceWithTax = totalTax + totalPriceNoTax

    if (command === 'special') {
        totalPriceWithTax *= 0.9
    }

    if (totalPriceWithTax <= 0) {
        console.log('Invalid order!');
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalPriceNoTax.toFixed(2)}$`);
        console.log(`Taxes: ${totalTax.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalPriceWithTax.toFixed(2)}$`);
    }









}
solve(['1050', '200', '450', '2', '18.50', '16.86', 'special']);