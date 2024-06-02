function solve(nums) {


    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        nums[i] = Number(nums[i]);
        // if(nums[i] % 2 === 0){
        //     sum += nums[i]
        // }

    }


    for (const num of nums) {
        if (num % 2 === 0) {
            sum += num
        }
    }
    console.log(sum);


}
solve(['2', '4', '6', '8', '10'])