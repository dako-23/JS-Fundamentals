function employees(arr) {

    // class information {
    //     realnames;
    //     personNum;

    //     constructor(realnam, personNum) {
    //         this.realnam = realnam;
    //         this.personNum = personNum;
    //     }

    //     print() {

    //         console.log(`Name: ${realnam} -- Personal Number: ${personNum}`);

    //     }

    // }

    for (const employeeNames of arr) {

        personalNum = employeeNames.length

        const employeeObj = {
            name: employeeNames,
            number: personalNum
        };
        console.log(`Name: ${employeeObj.name} -- Personal Number: ${employeeObj.number}`);

        // const res = new information(realnam, personNum);
        // res.print()
    }

}
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
