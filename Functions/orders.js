function orders(product, qty) {


    const coffee = 1.50;
    const water = 1;
    const coke = 1.40;
    const snacks = 2;

    switch (product) {
        case 'coffee':
            console.log((coffee * qty).toFixed(2));
            break;
        case 'water':
            console.log((water * qty).toFixed(2));
            break;
        case 'coke':
            console.log((coke * qty).toFixed(2));
            break;
        case 'snacks':
            console.log((snacks * qty).toFixed(2));
            break;

    }










}
orders("water", 5);