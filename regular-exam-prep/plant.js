function solve(input) {

    let n = Number(input.shift());
    let plants = {};
 
  
    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift().split('<->');
        rarity = Number(rarity);
        plants[plant] = { rarity: rarity, ratings: [] };
    }
 
  
    while (input.length > 0) {
        let commandLine = input.shift();
        if (commandLine === "Exhibition") break;
 
        let [command, rest] = commandLine.split(': ');
        let [plant, value] = rest.split(' - ');
 
        if (!plants.hasOwnProperty(plant)) {
            console.log("error");
            continue;
        }
 
        switch (command) {
            case "Rate":
                let rating = Number(value);
                plants[plant].ratings.push(rating);
                break;
            case "Update":
                let newRarity = Number(value);
                plants[plant].rarity = newRarity;
                break;
            case "Reset":
                plants[plant].ratings = [];
                break;
            default:
                console.log("error");
                break;
        }
    }
 
  
    console.log("Plants for the exhibition:");
    for (let plant in plants) {
        let averageRating = plants[plant].ratings.length > 0 ? 
            plants[plant].ratings.reduce((a, b) => a + b, 0) / plants[plant].ratings.length : 
            0;
        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${averageRating.toFixed(2)}`);
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