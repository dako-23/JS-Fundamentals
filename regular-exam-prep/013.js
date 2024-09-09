function solve(arr) {

    let result = {};

    let command = arr.shift();


    while (command !== "Sail") {

        const tokens = command.split('||')
        const city = tokens.shift();
        const population = Number(tokens.shift());
        const gold = Number(tokens.shift());

        if (city in result) {
            result[city].population += population
            result[city].gold += gold
        } else {
            result[city] = { population: population, gold: gold };

        }


        command = arr.shift();
    }

    command = arr.shift();

    while (command !== 'End') {

        const tokens = command.split('=>')
        const action = tokens.shift();
        const cityAtt = tokens.shift();

        if (action === 'Plunder') {
            const peopleKilled = Number(tokens.shift());
            const goldStolen = Number(tokens.shift());

            result[cityAtt].population -= peopleKilled
            result[cityAtt].gold -= goldStolen

            console.log(`${cityAtt} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);

            if (result[cityAtt].population <= 0 || result[cityAtt].gold <= 0) {
                console.log(`${cityAtt} has been wiped off the map!`);
                delete result[cityAtt]

            }


        } else if (action === 'Prosper') {
            const goldIncrease = Number(tokens.shift());
            if (goldIncrease < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                result[cityAtt].gold += goldIncrease
                console.log(`${goldIncrease} gold added to the city treasury. ${cityAtt} now has ${result[cityAtt].gold} gold.`);
            }



        }

        command = arr.shift();
    }


    // let counter = 0

    // for (const key in result) {
    //     counter++

    // }
    const entries = Object.entries(result)

    if (entries.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
        // const entries = Object.entries(result)

        for (let [name, stats] of entries) {

            console.log(`${name} -> Population: ${stats.population} citizens, Gold: ${stats.gold} kg`);


        }
    }

}
solve(["Tortuga||345000||1250", "Santo Domingo||240000||630", "Havana||410000||1100", "Sail", "Plunder=>Tortuga=>75000=>380", "Prosper=>Santo Domingo=>180", "End"]);


// Tortuga plundered! 380 gold stolen, 75000 citizens killed.
// 180 gold added to the city treasury. Santo Domingo now has 810 gold.
// Ahoy, Captain! There are 3 wealthy settlements to go to:
// Tortuga -> Population: 270000 citizens, Gold: 870 kg
// Santo Domingo -> Population: 240000 citizens, Gold: 810 kg
// // Havana -> Population: 410000 citizens, Gold: 1100 kg