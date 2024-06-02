function solve(num, arr) {

    // let output = ""

    //     for(let i = num - 1; i >= 0; i--){

    //         output += arr[i] + " ";

    //     }

    // console.log(output);

    const result = [];
    const reversed = [];

    for (let i = 0; i < num; i++) {

        result[i] = arr[i]
    }

    for (let i = result.length - 1; i >= 0; i--) {
        reversed[reversed.length] = result[i]
    }
    
console.log(reversed.join(" "));




}
solve(3, [10, 20, 30, 40, 50]);