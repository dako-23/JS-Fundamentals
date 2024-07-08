function adressBook(arr) {

    const result = {}

    for (const command of arr) {

        const [name, adress] = command.split(":")

        result[name] = adress


    }


    const entries = Object.entries(result)
    entries.sort(([nameA, addresA], [nameB, addresB]) => {

        return nameA.localeCompare(nameB);

    })

    for (const [name, address] of entries) {

        console.log(`${name} -> ${address}`);
        
    }



}
adressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);
// MAP 
// SET
