function shoppingList(arr) {

    const initialList = arr.shift().split('!');

    let command = arr.shift();

    while (command !== 'Go Shopping!') {

        let tokens = command.split(' ');
        let action = tokens.shift();

        switch (action) {
            case 'Urgent':
                curItem = tokens.shift()
                if (!initialList.includes(curItem)) {
                    initialList.unshift(curItem)
                }
                break;
            case 'Unnecessary':
                deletedItem = tokens.shift()
                let index = initialList.indexOf(deletedItem);
                if (index !== -1) {
                    initialList.splice(index, 1);
                }
                break;
            case 'Correct':
                let items = tokens
                let oldItems = items.shift()
                let newItems = items.shift()
                for (const itemChecker of initialList) {
                    // let index = initialList.indexOf(oldItems);
                    if (itemChecker.includes(oldItems)) {
                        let index = initialList.indexOf(oldItems);
                        if (index !== -1) {
                            initialList.splice(index, 1, newItems);
                        }
                    }
                }
                break;
            case 'Rearrange':
                let item = tokens.shift()
                let index1 = initialList.indexOf(item)
                if (index1 !== -1) {
                    initialList.splice(index1, 1);
                    initialList.push(item)
                }
                break;
        }

        command = arr.shift()
    }

    console.log(initialList.join(', '));






}
// shoppingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"])
shoppingList(["Grapes!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Potatoes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])