function solve(commands) {

    let nums = commands.shift()
    let arr = nums.split(' ').map(Number)


    for (const command of commands) {

        if (command === 'Finish') {
            break;
        }

        let tokens = command.split(' ');
        let action = tokens.shift()
        let num = tokens.shift()

        if (action === 'Add') {
            arr.push(num)

        } else if (action === 'Remove') {

            let index = arr.indexOf(num)
            arr.slice(index, 0)


        } else if (action === 'Replace') {

        } else if (action === 'Collapse') {

        }
        console.log(num);
    }


    console.log(arr);






}
solve(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);