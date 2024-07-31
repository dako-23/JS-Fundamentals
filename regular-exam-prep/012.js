function solve(arr) {


    const text = arr.shift()
    const pattern = /(?<delimiter>[#|])(?<item>[a-zA-Z]+)\k<delimiter>(?<exp_date>\d{2}\/\d{2}\/\d{2})\k<delimiter>(?<cal>\d+)\k<delimiter>/g;
    let calories = 0;
    let itemsArr = [];

    let match = pattern.exec(text)

    while (match) {

        let items = match.groups.item
        let date = match.groups.exp_date
        let cals = match.groups.cal

        calories += Number(cals);


        itemsArr.push(`Item: ${items}, Best before: ${date}, Nutrition: ${cals}`);


        match = pattern.exec(text)
    }


    let days = Math.floor(calories / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    for (const el of itemsArr) {
        console.log(el);

    }




}
solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);