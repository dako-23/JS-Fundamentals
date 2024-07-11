function solve(arr) {

    const obj = {};

    for (const data of arr) {

        const tokens = data.split(" ")
        const name = tokens.shift()
        let sum = 0;

        for (const grade of tokens) {
            const num = Number(grade)
            sum += num

        }

        const devisor = tokens.length
        let avgGrades = sum / devisor

        // console.log(devisor);
        if (name in obj) {
            let secondAvg = (Number(obj[name]) + avgGrades) / 2;
            obj[name] = secondAvg.toFixed(2)

        } else {
            obj[name] = avgGrades.toFixed(2)
        }

    }

    const entries = Object.entries(obj);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, grade] of entries) {

        console.log(`${name}: ${grade}`);
        
    }


}
solve([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);