function bombNumber(nums, bomb) {

    const [bombNum, power] = bomb

    const bombIdx = nums.indexOf(bombNum)

    // let resultArr = nums.splice(power, bombIdx)
    // nums.splice(bombIdx, power)
    // nums.splice(bombIdx, power)

    let newArr1 = nums.slice(0, bombIdx)
    let newArr2 = nums.slice(bombIdx + 1)
    if (newArr2.length % 2 === 1) {
        newArr2.shift();
    }
    newArr1.splice(-power)
    newArr2.reverse().splice(power)

    console.log(newArr1);
    console.log(newArr2);

}
// bombNumber([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNumber([1, 4, 4, 2, 8, 9, 1], [9, 3])
// bombNumber([1, 7, 7, 1, 2, 3], [7, 1])
bombNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])