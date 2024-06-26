function treasureHunt(arr) {

    let items = arr.shift().split('|');

    let command = arr.shift()

    while (command !== 'Yohoho!') {
        let tokens = command.split(' ');
        let action = tokens.shift()

        switch (action) {
            case 'Loot':
                const newItems = tokens;
                for (const newItem of newItems) {

                    if (!items.includes(newItem)) {
                        items.unshift(newItem);
                    }

                }
                console.log(newItems);
                break;
            case 'Drop':
                const index = Number(tokens.shift());

                if (index >= 0 && index < items.length) {
                    const deletedItems = items.splice(index, 1)[0];
                    items.push(deletedItems);
                }
                break;

            case 'Steal':
                const countToDelete = Number(tokens.shift())
                const stolenItems = items.splice(-countToDelete);
                console.log(stolenItems.join(', '));
                break;


        }

        command = arr.shift()
    }


    // console.log(items);

    let sumGain = 0;

    for (const item of items) {
        sumGain += item.length
    }

    let averageGain = sumGain / items.length

    if (items.length === 0) {
        console.log('Failed treasure hunt.');
    } else {
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }



}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]);