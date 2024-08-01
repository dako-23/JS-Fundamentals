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

            if (result[cityAtt].population || result[cityAtt].gold <= 0) {
                console.log(`${cityAtt} has been wiped off the map!`);
                delete result[cityAtt]

            }


        } else if (action === 'Prosper') {
            const goldIncrease = Number(tokens.shift());


        }

        command = arr.shift();
    }

    for (const key in result) {
        console.log(result);
    }








}
solve(["Tortuga||345000||1250", "Santo Domingo||240000||630", "Havana||410000||1100", "Sail", "Plunder=>Tortuga=>75000=>380", "Prosper=>Santo Domingo=>180", "End"]);