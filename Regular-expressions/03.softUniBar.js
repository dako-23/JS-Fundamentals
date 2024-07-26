function solve(arr) {

    let total = 0;
    const regex = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[d^|$%.]*(?<price>\d+\.?\d+)\$/

    let command = arr.shift();

    while (command !== 'end of shift') {

        let isValid = command.match(regex);

        if(!isValid){
            command = arr.shift()
            continue;
        }

        let customerName = isValid.groups.customer;
        let productName = isValid.groups.product;
        let numCount = isValid.groups.count;
        let price = isValid.groups.price;

        let curTotal = Number(price) * Number(numCount);
        total += curTotal;

        console.log(`${customerName}: ${productName} - ${curTotal.toFixed(2)}`);


        command = arr.shift()
    }
console.log(`Total income: ${total.toFixed(2)}`);








}
solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);