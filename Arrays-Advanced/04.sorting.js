function sorting(arr) {

    let newArr = arr.sort(((a, b) => a - b));
    let result = [];


    while (newArr.length > 0) {
        const lastNum = newArr.pop()
        result.push(lastNum)

        const firstNum = newArr.shift()
        result.push(firstNum)

    }



    console.log(result.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);