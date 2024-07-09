function catalogue(arr) {

    let products = [];

    for (const product of arr) {

        let [name, price] = product.split(" : ");
        price = Number(price);

        products.push({ name, price })

    }

    let sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));

    
    let curLetter = '';

    for (const product of sortedProducts) {
        
        let firstLetter = product.name[0];

        if(firstLetter !== curLetter){
            curLetter = firstLetter
            console.log(curLetter);
        }

        console.log(`  ${product.name}: ${product.price}`);

    }

}
catalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);