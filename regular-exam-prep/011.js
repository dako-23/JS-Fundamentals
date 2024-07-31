function solve(arr) {

    let msg = arr.shift();

    let command = arr.shift();

    while (command !== 'Decode') {

        let tokens = command.split('|')
        let action = tokens.shift()

        if (action === 'ChangeAll') {

            const [substring, replacement] = tokens

            // while (msg.includes(substring)) {
            //     msg = msg.replace(substring, replacement)
            // }

            msg = msg.split(substring).join(replacement)



        } else if (action === 'Insert') {

            let index = Number(tokens.shift());
            let value = tokens.shift();


            msg = msg.slice(0, index) + value + msg.slice(index)


        } else if (action === 'Move') {

            let letterCount = Number(tokens.shift());
            let letterToMove = msg.substring(0, letterCount)

            msg = msg.replace(letterToMove, "")
            msg += letterToMove

        }



        command = arr.shift();
    }

    console.log(`The decrypted message is: ${msg}`);





}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);