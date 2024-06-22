function firstAndLastKNumbers(arr) {

    const k = arr[0];
    const copy = arr.slice(1);

    const firstRes = copy.slice(0, k);
    const secondRes = copy.slice(-k);

    console.log(firstRes.join(' '));
    console.log(secondRes.join(' '));








}
// firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);