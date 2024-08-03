function solve(arr) {

    const plantsNum = Number(arr.shift());

    let result = {};


    for (let i = 0; i < plantsNum; i++) {

        const tokens = arr.shift().split('<->');
        const plant = tokens.shift();
        const rarity = Number(tokens.shift());

        if (plant in result) {
            result[plant].rarity += rarity
            // result[plant].rating += rating
        } else {
            result[plant] = { rarity: rarity, rating: [] };
        }

    }


    let command = arr.shift()

    while (command !== 'Exhibition') {

        const tokens = command.split(' ')
        const action = tokens.shift();
        const plantName = tokens.shift();

        if (!result.hasOwnProperty(plantName)) {
            console.log("error");
            continue;
        }

        if (action === 'Rate:') {

            let [_, rating] = tokens
            rating = Number(rating)

            result[plantName].rating.push(rating)


        } else if (action === 'Update:') {
            let [_, newRarity] = tokens
            newRarity = Number(newRarity);

            result[plantName].rarity = newRarity

        } else if (action === 'Reset:') {

            result[plantName].rating = [];

        } else {
            console.log("error");
        }

        command = arr.shift()
    }


    console.log("Plants for the exhibition:");
    for (let plant in result) {
        let averageRating = result[plant].rating.length > 0 ?
            result[plant].rating.reduce((a, b) => a + b, 0) / result[plant].rating.length :
            0;
        console.log(`- ${plant}; Rarity: ${result[plant].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }

}
solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])