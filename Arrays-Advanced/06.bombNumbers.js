function bombNumber(nums, bomb) {

    const [bombNum, power] = bomb

    const bombIdx = nums.indexOf(bombNum)

    // let resultArr = nums.splice(power, bombIdx)
    // nums.splice(bombIdx, power)
    // nums.splice(bombIdx, power)

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];

        console.log(element);
    }

    // console.log(nums);


}
bombNumber([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);