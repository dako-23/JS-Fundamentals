function aMinerTask(arr) {

    let resourceQty = {};

    for (let i = 0; i < arr.length; i += 2) {

        let resources = arr[i];
        let qty = Number(arr[i + 1]);

        if (resources in resourceQty) {
            resourceQty[resources] += qty
        } else {
            resourceQty[resources] = qty;
        }

    }

    let entries = Object.entries(resourceQty);

    for (const [resource, qty] of entries) {

        console.log(`${resource} -> ${qty}`);
        
    }

    // for (const key in resourceQty) {

    //     console.log(`${key} -> ${resourceQty[key]}`);

    // }

}
aMinerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);