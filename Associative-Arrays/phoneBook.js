function phoneBook(arr) {

    const phonebook = {};

    for (const personDetails of arr) {
        const tokens = personDetails.split(" ");
        const name = tokens[0];
        const number = tokens[1];

        phoneBook[name] = number;
    }

    for (const key in phoneBook) {

        console.log(`${key} -> ${phoneBook[key]}`);
        
    }


}
phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);