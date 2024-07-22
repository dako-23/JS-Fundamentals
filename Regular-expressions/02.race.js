function solve(arr) {

    let names = arr.shift().split(', ')
    let distance = {};
    names.forEach(name => distance[name] = 0);

    let command = arr.shift();
    let letterPatern = /[A-Za-z]/g;
    let digitsPatern = /\d/g;

    while (command !== 'end of race') {

        let letterResult = command.match(letterPatern)
        let name = letterResult.join('');

        let digitsResult = command.match(digitsPatern);
        let time = digitsResult.map(Number).reduce((acc, val) => acc + val);

        if (name in distance) {
            distance[name] += time
        }

        command = arr.shift();
    }



    const entries = Object.entries(distance)
    const sortedEntries = entries.sort((a, b) => b[1] - a[1]);

    // for (const [name, time] of sortedEntries) {
    //     let counter = 1;
    //     console.log(`${counter} place: ${name}`);
    //     counter++
    // }

console.log(`1st place: ${sortedEntries[0][0]}`);
console.log(`2nd place: ${sortedEntries[1][0]}`);
console.log(`3rd place: ${sortedEntries[2][0]}`);



}
solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);