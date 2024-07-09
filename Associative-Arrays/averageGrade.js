function average(arr) {

    let obj = {}
    let result = 0;

    for (const command of arr) {
        let tokens = command.split(' ');

        let student = tokens.shift()
        let grade = tokens.map(Number);

        obj[student] = grade


    }

    const entries = Object.entries(result)
    

    for (const [name, address] of entries) {

        console.log(`${name} -> ${address}`);

    }










}
average(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);