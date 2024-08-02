function solve(arr) {

    let result = {};

    const numOfPieces = Number(arr.shift());

    // let command = arr.shift();

    for (let i = 0; i < numOfPieces; i++) {

        const [piece, compose, key] = arr.shift().split('|');


        if (piece in result) {
            result[piece].compose += compose
            result[piece].key += key
        } else {
            result[piece] = { compose: compose, key: key };

        }

    }
    // console.log(result);

    command = arr.shift();

    while (command !== 'Stop') {
        const tokens = command.split('|')
        const action = tokens.shift();
        const pieceName = tokens.shift();

        if (action === 'Add') {
            const compose = tokens.shift();
            const key = tokens.shift();

            if (pieceName in result) {
                console.log(`${pieceName} is already in the collection!`);
            } else {
                console.log(`${pieceName} by ${compose} in ${key} added to the collection!`);
                result[pieceName] = { compose: compose, key: key };
            }
        } else if (action === 'Remove') {

            if (pieceName in result) {
                console.log(`Successfully removed ${pieceName}!`);
                delete result[pieceName];
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        } else if (action === 'ChangeKey') {
            const newKey = tokens.shift()

            if (pieceName in result) {
                console.log(`Changed the key of ${pieceName} to ${newKey}!`);
                result[pieceName].key = newKey
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);

            }
        }





        command = arr.shift();
    }

    const entries = Object.entries(result)

    for (const [name, stats] of entries) {
        console.log(`${name} -> Composer: ${stats.compose}, Key: ${stats.key}`);
    }







}
// solve([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ])

// //Sonata No.2 by Chopin in B Minor added to the collection!
// Hungarian Rhapsody No.2 by Liszt in C# Minor added to the collection!
// Fur Elise is already in the collection!
// Successfully removed Clair de Lune!
// Changed the key of Moonlight Sonata to C# Major!
// Fur Elise -> Composer: Beethoven, Key: A Minor
// Moonlight Sonata -> Composer: Beethoven, Key: C# Major
// Sonata No.2 -> Composer: Chopin, Key: B Minor
// Hungarian Rhapsody No.2 -> Composer: Liszt, Key: C# Minor

solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]);
// //Spring by Vivaldi in E Major added to the collection!
// Successfully removed The Marriage of Figaro!
// Invalid operation! Turkish March does not exist in the collection.
// Changed the key of Spring to C Major!
// Nocturne by Chopin in C# Minor added to the collection!
// Eine kleine Nachtmusik -> Composer: Mozart, Key: G Major
// La Campanella -> Composer: Liszt, Key: G# Minor
// Hungarian Dance No.5 -> Composer: Brahms, Key: G Minor
// Spring -> Composer: Vivaldi, Key: C Major
// Nocturne -> Composer: Chopin, Key: C# Minor

