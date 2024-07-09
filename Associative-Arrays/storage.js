function storage(arr) {

    const map = new Map();

    for (const el of arr) {
        let tokens = el.split(' ');
        let product = tokens[0];
        let qty = Number(tokens[1]);

        if (!map.has(product)) {
            map.set(product, qty);
        } else {
            let currQty = map.get(product);
            let newQty = currQty += qty
            map.set(product, newQty)
        }
    }

    for (const el of map) {
        console.log(`${el[0]} -> ${el[1]}`);
    }


}
storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);