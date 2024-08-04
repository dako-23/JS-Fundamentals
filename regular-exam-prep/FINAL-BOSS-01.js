function solve(arr) {

    let spell = arr.shift();

    let command = arr.shift();


    while (command !== 'Abracadabra') {

        const tokens = command.split(' ');
        const action = tokens.shift();

        if (action === 'Abjuration') {
            spell = spell.toUpperCase()
            console.log(spell);

        } else if (action === 'Necromancy') {
            spell = spell.toLowerCase()
            console.log(spell);

        } else if (action === 'Illusion') {
            const index = Number(tokens.shift());
            const letterToRep = tokens.shift();

            if (index >= 0 && index < spell.length) {
                const firstPart = spell.slice(0, index);
                const secondPart = spell.slice(index + 1);

                spell = firstPart + letterToRep + secondPart

                console.log('Done!');


            } else {
                console.log('The spell was too weak.');

            }


        } else if (action === 'Divination') {
            const firstStr = tokens.shift();
            const secondStr = tokens.shift();


            if (spell.includes(firstStr)) {
                spell = spell.split(firstStr).join(secondStr);
                console.log(spell);
            }
            // } else {
            //     break;
            // }

        } else if (action === 'Alteration') {

            const substr = tokens.shift()
            if (spell.includes(substr)) {
                spell = spell.replace(substr, '')
                console.log(spell);
            }


        } else {
            console.log(`The spell did not work!`);

        }



        command = arr.shift();
    }





}
// solve(["A7ci0",
//     "Illusion 1 c",
//     "Illusion 4 o",
//     "Abjuration",
//     "Abracadabra"]);


// Done!
// Done!
// ACCIO

// solve(["TR1GG3R",
//     "Necromancy",
//     "Illusion 8 m",
//     "Illusion 9 n",
//     "Abracadabra"])

solve(["SwordMaster",
    "Target Target Target",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Abracadabra"])