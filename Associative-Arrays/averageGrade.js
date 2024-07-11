function solve(arr) {
    
    let book = {};

    for (let el of arr) {
        let infoArr = el.split(" ");
        // console.log(infoArr);
        let name = infoArr.shift();
        let sumOfGrades = 0;
        for (let num of infoArr) {
            num = Number(num);
            sumOfGrades += num;
            // console.log(sumOfGrades);
        }
        let divider = infoArr.length;
        // console.log(divider);
        let avgOfGrades = sumOfGrades / divider;
        // console.log(avgOfGrades);
        if (name in book) {
            let secondAvg = (Number(book[name]) + avgOfGrades) / 2;
            book[name] = secondAvg.toFixed(2);
        } else {
            book[name] = avgOfGrades.toFixed(2);
        }
        
    }

const entries = Object.entries(book);

entries.sort((a,b) => a[0].localeCompare(b[0]))

for (const [name, grade] of entries) {
    console.log(`${name}: ${grade}`);
    
}






}
solve(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);