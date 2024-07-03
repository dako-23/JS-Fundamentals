function employees(arr) {

    class information {
        realnames;
        personNum;

        constructor(realnam, personNum) {
            this.realnam = realnam;
            this.personNum = personNum;
        }

        print() {

            console.log(`Name: ${realnam} -- Personal Number: ${personNum.length}`);


        }

    }


    for (const names of arr) {

        realnam = names;
        personNum = names.split('');

        const res = new information(realnam, personNum);
        res.print()
    }



}
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
