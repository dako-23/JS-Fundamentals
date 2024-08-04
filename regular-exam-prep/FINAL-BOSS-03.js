function solve(arr) {

    let result = {}
    let counter = 0;

    let command = arr.shift();

    while (command !== 'Stop') {

        const tokens = command.split('-')
        const action = tokens.shift();
        const guest = tokens.shift();
        const meal = tokens.shift();

        if (action === "Like") {

            if (!result[guest]) {

                result[guest] = new Set();
            }

            result[guest].add(meal);

        } else if (action === "Dislike") {

            if (!result[guest]) {

                console.log(`${guest} is not at the party.`);

            } else if (!result[guest].has(meal)) {
                console.log(`${guest} doesn't have the ${meal} in his/her collection.`);

            } else {

                result[guest].delete(meal);
                console.log(`${guest} doesn't like the ${meal}.`);
                counter++;
            }
        }


        command = arr.shift();
    }

    const guestList = [];
    for (const guest in result) {
        if (result[guest].size > 0) {
            guestList.push(`${guest}: ${[...result[guest]].join(', ')}`);
        } else {
            guestList.push(`${guest}:`);
        }
    }
    if (guestList.length > 0) {
        console.log(guestList.join('\n'));
    }
    // console.log(guestList.join('\n'));
    console.log(`Unliked meals: ${counter}`);


}
// solve(["Like-Krisi-shrimps",
//     "Like-Krisi-soup",
//     "Like-Penelope-dessert",
//     "Like-Misho-salad",
//     "Stop"]);

// Krisi: shrimps, soup
// Penelope: dessert
// Misho: salad
// Unliked meals: 0

// solve(["Like-Krisi-shrimps",
//     "Dislike-Vili-carp",
//     "Dislike-Krisi-salad",
//     "Stop"])
solve(["Like-Katy-fish",
    "Dislike-Katy-fish",
    "Stop"])