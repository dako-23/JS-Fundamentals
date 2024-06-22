function searchForNumber(firstArr, secondArr) {

    let count = 0;
    const [numberToTake, numberToDelete, searchedNum] = secondArr;

    let newArr = firstArr.slice(0, numberToTake);
    newArr.splice(0, numberToDelete);

    for (const counter of newArr) {
        if (counter === searchedNum) {
            count++
        }
    }

    console.log(`Number ${searchedNum} occurs ${count} times.`);


}
// searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForNumber([7, 5, 5, 8, 5, 5], [3, 1, 5]);