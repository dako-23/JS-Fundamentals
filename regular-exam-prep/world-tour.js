function solve(arr) {

    let msg = arr.shift();

    let command = arr.shift();

    while (command !== 'Travel') {

        const tokens = command.split(':')
        const action = tokens.shift();


        if (action === 'Add Stop') {
            const index = Number(tokens.shift());
            const cityToAdd = tokens.shift();

            if (index >= 0 && index <= msg.length) {
                const firstPart = msg.slice(0, index);
                const secondPart = msg.slice(index);
                msg = `${firstPart}${cityToAdd}${secondPart}`
                // console.log(msg);
            }

        } else if (action === 'Remove Stop') {
            const startIndex = Number(tokens.shift());
            const endIndex = Number(tokens.shift());
            if (startIndex >= 0 && endIndex < msg.length && startIndex <= endIndex) {

                const newMsg = msg.slice(startIndex, endIndex + 1);
                msg = msg.replace(newMsg, "")
                // console.log(msg);
            }

        } else if (action === 'Switch') {
            const oldStr = tokens.shift();
            const newStr = tokens.shift();

            msg = msg.split(oldStr).join(newStr)
            // console.log(msg);


        }
        console.log(msg);
        command = arr.shift();
    }


    console.log(`Ready for world tour! Planned stops: ${msg}`);







}
solve(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);

