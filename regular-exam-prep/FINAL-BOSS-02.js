function solve(arr) {

    // const input = arr
    const regex = /[@#]+([a-z]{3,})[@#]+[^a-zA-Z0-9]*\/+(\d+)\/+/g;

    // console.log(input);


    arr.forEach(str => {
        let match;
        while ((match = regex.exec(str)) !== null) {
            const color = match[1];
            const amount = match[2];
            console.log(`You found ${amount} ${color} eggs!`);
        }
    });



}
solve(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);


// You found 10 green eggs!
// You found 8 red eggs!
// You found 6 red eggs!
// You found 5 purple eggs!
