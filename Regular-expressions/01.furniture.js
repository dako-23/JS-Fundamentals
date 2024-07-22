function solve(arr) {

    let totalPrice = 0;
    let furnitures = []
    let command = arr.shift();
    const regexp = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/

    while (command !== 'Purchase') {

        let match = command.match(regexp)

        if (match) {
            let { name, price, quantity } = match.groups;
            furnitures.push(name)
            let cost = Number(price) * Number(quantity)
            totalPrice += cost

        }

        command = arr.shift()
    }

    console.log('Bought furniture:');

    furnitures.forEach(el => console.log(el));

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);


}
solve
    (['>>Sofa<<312.23!3',
        '>>TV<<300!5',
        '>Invalid<<!5',
        'Purchase']);